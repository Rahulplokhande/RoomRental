require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const Property = require('./model/Kiraya.js');
const Login = require('./model/Login.js');
const userRoutes = require('./routes/userRoutes');
const auth = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 7070;

// ---------------- MULTER ----------------
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ---------------- MONGODB ----------------
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to 'Kiryaa' database"))
  .catch(err => console.log("MongoDB Error:", err));

// ---------------- VIEW ENGINE ----------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------------- MIDDLEWARE ----------------
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'yourSecretKey',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', userRoutes);

// ---------------- LOCALS ----------------
app.use((req, res, next) => {
  res.locals.currentUser = req.session.user;
  res.locals.currentRoute = req.path;
  res.locals.user = req.user || req.session.user || null;
  next();
});

// ---------------- GOOGLE AUTH ----------------
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:7070/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await Login.findOne({ googleId: profile.id });

    if (!user) {
      user = new Login({
        firstname: profile.name.givenName,
        lastname: profile.name.familyName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
      await user.save();
    }

    done(null, user);
  } catch (err) {
    done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Login.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// ---------------- AUTH ROUTES ----------------
app.get("/login", (req, res) => {
  res.render("include/login");
});

app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.send("<script>alert('Passwords do not match!'); window.history.back();</script>");
    }

    const existingUser = await Login.findOne({ email });
    if (existingUser) {
      return res.send("<script>alert('Email already registered!'); window.history.back();</script>");
    }

    const newUser = new Login({ firstname, lastname, email, password });
    await newUser.save();

    req.session.user = newUser;
    res.redirect("/home");
  } catch (err) {
    console.error(err);
    res.send("<script>alert('Registration failed!'); window.history.back();</script>");
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await Login.findOne({ email: req.body.email });

    if (user && user.password === req.body.password) {
      req.session.user = user;
      res.redirect("/home");
    } else {
      res.send("<script>alert('Invalid email or password!'); window.history.back();</script>");
    }
  } catch (err) {
    console.error(err);
    res.send("<script>alert('Login failed!'); window.history.back();</script>");
  }
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/home");
  }
);

app.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  });
});

// ---------------- MAIN ROUTES ----------------
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("listing/home", { currentRoute: '/home', user: req.session.user });
});

app.get("/about", (req, res) => {
  res.render("pages/about.ejs", { currentRoute: '/about', user: req.session.user });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact.ejs", { currentRoute: '/contact', user: req.session.user });
});

app.get("/changepassword", (req, res) => {
  res.render("include/changepassword");
});

// ---------------- PROPERTY ROUTES ----------------
app.get("/home/listing", async (req, res) => {
  try {
    const allProperties = await Property.find({});
    res.render("listing/index.ejs", {
      allProperties,
      currentRoute: '/home/listing',
      user: req.session.user
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to load listings");
  }
});

app.get('/search', async (req, res) => {
  const city = req.query.city;

  try {
    let allProperties;

    if (!city || city.trim() === "") {
      allProperties = await Property.find({});
    } else {
      allProperties = await Property.find({
        city: { $regex: city, $options: 'i' }
      });
    }

    res.render("listing/search", { allProperties });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/home/listing/new", auth.isLoggedIn, (req, res) => {
  res.render("listing/new.ejs", {
    currentRoute: '/home/listing/new',
    user: req.session.user
  });
});

app.post("/home/listing", auth.isLoggedIn, upload.single("property[image]"), async (req, res) => {
  try {
    const propertyData = req.body.property;

    const newProperty = new Property({
      ...propertyData,
      image: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype
          }
        : undefined
    });

    await newProperty.save();
    res.redirect("/home/listing");
  } catch (err) {
    console.error("Error while saving property:", err);
    res.status(500).send("Something went wrong!");
  }
});

app.get("/home/listing/:id", async (req, res) => {
  try {
    const propertys = await Property.findById(req.params.id);
    res.render("listing/show.ejs", {
      propertys,
      currentRoute: '/home/listing',
      user: req.session.user
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Property not found");
  }
});

app.get("/home/listing/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    res.render("listing/edit.ejs", { property });
  } catch (err) {
    console.error(err);
    res.status(500).send("Edit page failed to load");
  }
});

app.put("/home/listing/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Property.findByIdAndUpdate(id, { ...req.body.property }, { new: true });
    res.redirect(`/home/listing/${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

// ---------------- DEBUG ROUTES ----------------
app.get("/check-data", async (req, res) => {
  const allProperties = await Property.find({});
  res.json(allProperties);
});

app.get("/contact-success", (req, res) => {
  res.send("<h2>Message sent successfully!</h2><a href='/contact'>Go Back</a>");
});

// ---------------- SERVER ----------------
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}/home`);
});
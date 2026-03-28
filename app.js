// const express = require("express");
// const port = 7070;
// const mongoose= require('mongoose');
// const property = require('./model/Kiraya.js');
// const session = require('express-session');
// const path = require("path");
// const app=express();
// const bodyParser = require("body-parser");
// const multer=require("multer");


// app.use(express.urlencoded({extended:true}));
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '../frontend/public')));
// app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(session({
//     secret: 'yourSecretKey',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use((req, res, next) => {
//     res.locals.currentUser = req.session.user;
//     res.locals.currentRoute = req.path;
//     next();
//   });
//   app.use((req, res, next) => {
//     res.locals.user = req.user || null;
//     next();
// });

// mongoose.set('strictQuery', false);

// const storage = multer.memoryStorage(); 
// const upload = multer({ storage: storage });

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
// app.set("views",path.join(__dirname,"../frontend/views"));

// main()
// .then((res)=>{
//     console.log("Connecte to database 'Kirayaa'..");
// })
// .catch((err)=>{
//     console.log(err);
// })

// async function main(){
//     mongoose.connect("mongodb://127.0.0.1:27017/Kiryaa");
// }

// const loginSchema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     email: String,
//     password: String
// });

// const Login = mongoose.model("login", loginSchema);

// app.get("/login",(req,res)=>{       
//     res.render('include/login.ejs',{ user: req.session.user });
// })

// app.post("/register", async (req, res) => {
//     try {
//         const { firstname, lastname, email, password, confirmPassword } = req.body;

//         if (password !== confirmPassword) {
//             return res.send("<script>alert('Passwords do not match!'); window.history.back();</script>");
//         }
//         const existingUser = await Login.findOne({ email });
//         if (existingUser) {
//             return res.send("<script>alert('Email already registered!'); window.history.back();</script>");
//         }
//         const newUser = new Login({ firstname, lastname, email, password });
//         await newUser.save();
//         req.session.user = newUser;
//         res.redirect("/home");
//         } catch (error) {
//         res.send("<script>alert('Registration failed! Try again.'); window.history.back();</script>");
//     }
// });

// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await Login.findOne({ email, password });
//         req.session.user = user; 
//         if (user) {
//             res.redirect("/home");
//         } else {
//             res.send("<script>alert('Invalid email or password!'); window.history.back();</script>");
//         }
//     } catch (error) {
//         res.send("<script>alert('Login failed! Try again.'); window.history.back();</script>");
//     }
// });


// app.get("/home",async (req,res)=>{
//    res.render("listing/home.ejs", { currentRoute: '/home',user: req.session.user });
// })

// app.get("/about",(req,res)=>{
//     res.render("pages/about.ejs", { currentRoute: '/about' ,user: req.session.user });
// })

// app.get("/home/listing",async (req,res)=>{
//     const allProperties = await property.find({});
//     res.render("listing/index.ejs",{allProperties, currentRoute: '/home/listing',user: req.session.user });
// })

// app.get("/home/listing/new",(req,res)=>{
//     res.render("listing/new.ejs",{ currentRoute: '/home/listing/new',user: req.session.user });
// })

// app.post("/home/listing", upload.single("property[image]"), async(req,res)=>{
   
//     try {
//         const propertyData = req.body.property;

//         const newProperty = new property({
//             ...propertyData,
//             image: {
//                 data: req.file.buffer,
//                 contentType: req.file.mimetype
//             }
//         });

//         await newProperty.save();
//         res.redirect("/home/listing");
//     } catch (err) {
//         console.error("Error while saving property:", err);
//         res.status(500).send("Something went wrong!");
//     }
// })


// app.get('/home/listing/:id', async (req, res) => {
//     try {
//       const propertys = await property.findById(req.params.id);
//       res.render('listing/show.ejs',{propertys, currentRoute: '/home/listing', user: req.session.user });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Property not found');
//     }
//   });

// app.get("/contact",(req,res)=>{
//     res.render("pages/contact.ejs", { currentRoute: '/contact',user: req.session.user });
// })

// app.listen(port,()=>{
//     console.log(`Server is listning on port http://localhost:${port}/home`);
// })

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");
const Property = require('./model/Kiraya.js');
const Login = require('./model/Login.js')
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userRoutes = require('./routes/userRoutes');
const auth= require('./middleware/auth'); 
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 7070;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// MongoDB Connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to 'Kiryaa' database"))
    .catch(err => console.log(err));

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../frontend/views"));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../backend/public")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', userRoutes);


app.use((req, res, next) => {
    res.locals.currentUser = req.session.user;
    res.locals.currentRoute = req.path;
    res.locals.user = req.user || req.session.user || null;
    next();
});

// Passport Local Setup (Optional)
// You may add local strategy if needed

// Passport Google Strategy
passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL || "http://localhost:7070/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
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
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await Login.findById(id);
    done(null, user);
});

// Routes
app.get("/login", (req, res) => {
    res.render("include/login");
});

app.post("/register", async (req, res) => {
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
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Login.findOne({ email, password });
    if (user) {
        req.session.user = user;
        res.redirect("/home");
    } else {
        res.send("<script>alert('Invalid email or password!'); window.history.back();</script>");
    }
});

// Example login route

app.post("/login", async (req, res) => {
    const user = await Login.findOne({ email: req.body.email });
    if (user && user.password === req.body.password) {
      req.session.user = user; // ✅ make sure _id is included here
      res.redirect("/home");
    } else {
      res.send("<script>alert('Invalid email or password!'); window.history.back();</script>");
    }
  });
  
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        req.session.user = req.user;
        res.redirect("/home");
    });

app.get("/logout", (req, res) => {
    req.logout(() => {
        req.session.destroy();
        res.redirect("/login");
    });
});

// Other Routes (like /home, /home/listing etc. same as your current)
app.get("/home", (req, res) => {
    res.render("listing/home", { currentRoute: '/home', user: req.session.user });
});


// app.get("/home",async (req,res)=>{
//    res.render("listing/home.ejs", { currentRoute: '/home',user: req.session.user });
// })

app.get("/about",(req,res)=>{
    res.render("pages/about.ejs", { currentRoute: '/about' , user: req.session.user });
})

app.get("/home/listing",async (req,res)=>{
    const allProperties = await Property.find({});
    res.render("listing/index.ejs",{allProperties, currentRoute: '/home/listing',user: req.session.user });
})

app.get('/search', async (req, res) => {
    const city = req.query.city;  // not location
  
    try {
      let allProperties;
  
      if (!city || city.trim() === "") {
        // Show all properties
        allProperties = await Property.find({});
      } else {
        // Show properties matching city
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
  

  // app.get('/api/city-suggestions', async (req, res) => {
  //   const query = req.query.query;
  
  //   if (!query || query.trim() === '') {
  //     return res.json([]);
  //   }
  
  //   try {
  //     const cities = await Property
  //       .find({ city: { $regex: '^' + query, $options: 'i' } }) // starts with query
  //       .limit(5)
  //       .distinct('city'); // unique city names
  
  //     res.json(cities);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json([]);
  //   }
  // });

app.get("/home/listing/new", auth.isLoggedIn, (req, res) => {
    res.render("listing/new.ejs", { currentRoute: '/home/listing/new', user: req.session.user });
});

app.post("/home/listing", auth.isLoggedIn, upload.single("property[image]"), async (req, res) => {
    try {
        const propertyData = req.body.property;

        const newProperty = new Property({
            ...propertyData,
            // ownerId: req.session.user._id, 
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
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
      res.render('listing/show.ejs',{propertys, currentRoute: '/home/listing', user: req.session.user });
    } catch (err) {
      console.error(err);
      res.status(500).send('Property not found');
    }
  });

  //Edit Route
  app.get("/home/listing/:id/edit",async(req,res)=>{
    const {id}=req.params;
    const property = await Property.findById(id);
    res.render("listing/edit.ejs",{property})
  });

  //Update Route
  app.put("/home/listing/:id",async(req,res)=>{
      const {id}=req.params;
      const property = await Property.findByIdAndUpdate(id,{...req.body.property }, { new: true });
      console.log("Session user:", req.session.user);
      res.redirect(`/home/listing/${id}`);
  });

app.get("/contact",(req,res)=>{
    res.render("pages/contact.ejs", { currentRoute: '/contact',user: req.session.user });
})
app.get("/changepassword",(req,res)=>{
    res.render("include/changepassword");
})

// Root route to redirect to /home
app.get("/", (req, res) => {
    res.redirect("/home");
});

// Property Routes remain same...

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/home`);
});
//check which data is present

app.get("/check-data", async (req, res) => {
    const allProperties = await Property.find({});
    res.json(allProperties);
});
//for mail 
app.get("/contact-success", (req, res) => {
    res.send("<h2>Message sent successfully!</h2><a href='/contact'>Go Back</a>");
});
//render
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});
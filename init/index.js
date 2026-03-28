// import mongoose from "mongoose";
// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const property = require("../model/Kiraya.js");

// main()
// .then((res)=>{
//     console.log("Connecte to database 'Kiryaa'..");
// })
// .catch((err)=>{
//     console.log(err);
// })


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("DB connected"))
//   .catch(err => console.log(err));

// async function main(){
//     mongoose.connect(process.env.MONGO_URI)
//     // "mongodb://127.0.0.1:27017/Kiryaa"
// }

// const  initDB = async()=> {
//     await property.deleteMany({});
//     await property.insertMany(initData.data);
//     console.log("Data get initilized");
// } 

// initDB();

// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Atlas connected successfully");
//   })
//   .catch((err) => {
//     console.log("MongoDB connection error:", err);
//   });

// app.get("/", (req, res) => {
//   res.send("Server running");
// });

// app.listen(8080, () => {
//   console.log("Server started on port 8080");
// });


//from here



// const path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

// const mongoose = require("mongoose");
// const Property = require("../model/Kiraya");
// const initData = require("./data");

// async function main() {
//   await mongoose.connect(process.env.MONGO_URI);
//   console.log("Connected to MongoDB Atlas for seeding");
// }


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7070;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err);
  });

async function seedDB() {
  await Property.deleteMany({});
  await Property.insertMany(initData.data);
  console.log("Sample data inserted successfully");
}

main()
  .then(async () => {
    await seedDB();
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Seeding error:", err);
  });
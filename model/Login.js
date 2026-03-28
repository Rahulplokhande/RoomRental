const mongoose = require('mongoose');


const loginSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    googleId: String 
});
const Login = mongoose.model("login", loginSchema);

module.exports = Login; 
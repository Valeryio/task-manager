
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => { console.log("Database connected sucessfully!")})
.catch((err) => {console.log("Error while connected with the database!", err)});
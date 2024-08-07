const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoUrl = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true });
    console.log("Database connection established.");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

module.exports = connectDB;

require("dotenv").config();
const mongoose = require("mongoose");
const config = require("config");

const dbUrl = config.get("mongodbURI");

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("connecting successfully to database");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = {
  connectDb: connectDb
};

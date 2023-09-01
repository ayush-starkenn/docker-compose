const mongoose = require("mongoose");
const User_credentials_Schema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, required: true },
});

const User_credentials = new mongoose.model(
  "User_Credentials",
  User_credentials_Schema
);

module.exports = { User_credentials };

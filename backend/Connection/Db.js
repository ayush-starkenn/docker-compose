require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URL;

const Conn = mongoose.connect(url).then((res, err) => {
  if (err) console.log(err);
  else console.log("successfully connected to db");
});

module.exports = { Conn };

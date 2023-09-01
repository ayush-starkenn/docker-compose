const express = require("express");
const cors = require("cors");
const { Conn } = require("./Connection/Db");
const router = require("./Routers/Routes");

const app = express();

app.use(express.json());
app.use(cors({ extends: true }));

app.use("/uruws", router);

app.listen(3001, () => console.log("app is running"));

//establishing the connection
Conn;

const router = require("express").Router();
const { saveInfo, getData } = require("../Controller/Signup/SignupController");
// write routes for  --> basic use
router.post("/signup", saveInfo);
router.get("/signin", getData);

// write routes for  --> admin

// write routes for  --> customer

module.exports = router;

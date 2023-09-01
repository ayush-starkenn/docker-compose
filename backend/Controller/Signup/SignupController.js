const { default: mongoose } = require("mongoose");
const { User_credentials } = require("../../Models/SignupModel");

// function for signup
const saveInfo = async (req, res) => {
  const New_User = new User_credentials({
    email: req.body.email,
    password: req.body.password,
    status: 1,
  });

  await New_User.save().then((ress, err) => {
    if (err) res.send("checkout the error in the saveInfo function of Signup");
    else {
      res.send(ress);
    }
  });
};

//function for signin
const getData = async (req, res) => {
  console.log(req.body);
  await User_credentials.find({
    email: req.body.email,
    password: req.body.password,
  }).then((ress, err) => {
    console.log(ress);
    if (err) {
      console.log(err);
      return;
    } else if (ress.length > 0) {
      res.send({ status: ress[0].status, uuid: ress[0]._id });
    } else {
      res.send({ status: false });
    }
    // if (ress && ress.length > 0)
    //   res.send({ status: ress[0].status, uuid: ress[0]._id });
    // else res.send({ status: false });
  });
};

//exports
module.exports = { saveInfo, getData };

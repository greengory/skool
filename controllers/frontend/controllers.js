const Request = require("request");
const data = require("../../config/data");
const config = require("../../config/config");
const Models = require("../../models/model");

const frontendControllers = {};
let appName = config.app.name;

frontendControllers.editAccount = (req, res) => {
  const { username } = req.params;
  console.dir(username);
  Request.get(`http://skooli.herokuapp.com/api/student/username/${username}`, (err, response, body) => {
    if(err) throw err;
    const studentData = JSON.parse(body);
    res.render("frontend/account-edit", { title: appName , student: studentData });
  });
};

frontendControllers.updateAccount = (req, res) => {
  const { userName } = req.params;

  //GET POST data from request body
  const {
    firstName,
    middleName,
    lastName,
    avatar_url,
    email,
    phoneNumber,
    nationality,
    gender
  } = req.body;

  //create a new object for the data we want to update
  let newStudent = {
    firstName: firstName,
    middleName: middleName,
    lastName : lastName,
    avatar_url : avatar_url,
    email: email,
    nationality : nationality,
    gender: gender,
    updatedAt : Date.now()
  };


  Models.Students.findOneAndUpdate({username: req.params.username}, newStudent, (err, student) => {
    if(err) {
      return res.status(404).send("Student with that username Not Found")
    }
    if(student){
      return res.redirect("/");
    }
  });
};


frontendControllers.home = (req, res) => {
  Request.get("http://skooli.herokuapp.com/api/students", (err, response, body) => {
    if(err) throw err;
    const restData = JSON.parse(body);
    res.render("frontend/index", { title: appName , featuredCourses : data, newData: restData });
  });
};

frontendControllers.createAccount = (req, res) => {
  res.render("frontend/account-create", { title: appName});
};


module.exports = frontendControllers;

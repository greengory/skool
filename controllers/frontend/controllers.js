const Request = require("request");
const data = require("../../config/data");
const config = require("../../config/config");

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
    phoneNumber : phoneNumber,
    username: username,
    nationality : nationality,
    gender: gender,
    updatedAt : Date.now()
  };

  Request.put(`http://skooli.herokuapp.com/api/student/${username}`, (err, response, body) => {
    if(err) throw err;
    if(body) {
      const StudentData = JSON.parse(body);
      if(StudentData.success && (typeof StudentData.data !== "undefined") ){
        res.send({
          message: "successfully updated student"
        });
      }else {
        res.send({
          message: "Failed to update student"
        });
      }
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

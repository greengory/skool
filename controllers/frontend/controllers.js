const Request = require("request");
const data = require("../../config/data");
const config = require("../../config/config");

const frontendControllers = {};
let appName = config.app.name;

frontendControllers.editAccount = (req, res) => {
  const { username } = req.params;
  console.dir(username);
  //EDIT A STUDENT
  Request.get(`http://skooli.herokuapp.com/api/student/username/${username}`, (err, response, body) => {
    if(err) throw err;
    const studentData = JSON.parse(body);
    res.render("frontend/account-edit", { title: appName , student: studentData });
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

const data = require("../../config/data");

const frontendControllers = {};


frontendControllers.home = (req, res) => {
  res.render("frontend/index", { title: "Skooli", featuredCourses : data});
};  

frontendControllers.courseDetail = (req, res) => {

};

module.exports = frontendControllers;

const Request = require("request");
const data = require("../../config/data");

const frontendControllers = {};


frontendControllers.home = (req, res) => {
  Request.get("http://skooli.herokuapp.com/api/students", (err, response, body) => {
    if(err) throw err;
    const restData = JSON.parse(body);
    res.render("frontend/index", { title: "Skooli", featuredCourses : data, newData: restData });
  });
};

frontendControllers.courseDetail = (req, res) => {

};

module.exports = frontendControllers;

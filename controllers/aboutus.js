const Restaurant = require("../models/restaurant");

module.exports = {
    new: newAbout, 
};

function newAbout(req, res) {
    res.render('restaurants/aboutus');
  }
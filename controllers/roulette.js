
const Restaurant = require("../models/restaurant");


function index(req, res) {

    console.log(req.user, '< - req.user')
    Restaurant.find({}, function (err, restaurants) {
        let resRandom = restaurants[Math.floor(Math.random()* restaurants.length)];
            res.render("restaurants/roulette", {
          // <-  this refers to the view folder, to find the page we want to send
          // back to the client
        resRandom,
        title: " Restaurant",
        })
    })
};


module.exports = {
    index,
};

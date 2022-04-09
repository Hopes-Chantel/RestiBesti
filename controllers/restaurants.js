const Restaurant = require("../models/restaurant");



function show(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
        res.render('restaurants/show', {
            restaurant,
        });
        });
        };
  
  function newRes(req, res) {
      res.render("restaurants/new", { title: "Add Restaurant" });
  };

  function index(req, res) {
  
    console.log(req.user, '< - req.user')
    Restaurant.find({}, function (err, restaurants) {
        res.render("/index", {
          // <-  this refers to the view folder, to find the page we want to send
          // back to the client
          restaurants,
          title: "All Restaurants",
        });
    });
  }
  
  function create(req, res) {
    Restaurant.create(req.body, function(err, restaurant){ // < - this function gets invoked when there is a response from mongodb
  // err is the response from the db if there was an issue // the movie above this, is the document created in the db
      if (err) return res.redirect("/restaurants/new");
      console.log(movie);
      // for now, redirect right back to new.ejs
      res.redirect("/restaurants");
    })
  }
  
  module.exports = {
    new: newRes,
    create,
    index,
    show,
  };
  

const Restaurant = require("../models/restaurant");


function create(req, res) {
  req.body.user = req.user._id;
  const restaurant = new Restaurant(req.body);

  
    restaurant.save(function(err) {
      // one way to handle errors
      if (err) return res.render('restaurants');
      // for now, redirect right back to new.ejs
      res.redirect('/restaurants/all');
    });
  };


  function update(req, res) {
    Restaurant.findOneAndUpdate(req.params.id,
        req.body,
        { new: true },
        function (err, restaurant) {
          res.redirect(`/restaurants/${restaurant._id}`);
        }
      );
    }
    

    function deleteRestaurant(req, res) {
      Restaurant.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/restaurants');
      });
    }

    function edit(req, res) {
      Restaurant.findById(req.params.id, function (err, restaurant) {
        res.render('restaurants/edit', { restaurant });
        if (err || !restaurant) return res.redirect('/restaurants');
      });
    }
    
  function show(req, res) {
    Restaurant.find({}, function (err, restaurant) {
        res.render('restaurants/show', {
            title: 'Restaurant detail', restaurant: restaurant
        });
        });
        };
      
  
  function newRes(req, res) {
      res.render("restaurants/new", { title: "Add Restaurant" });
  };



  function index(req, res) {
  
   
    Restaurant.find({}, function (err, restaurant) {
        res.render("index", {
          // <-  this refers to the view folder, to find the page we want to send
          // back to the client
          restaurant,
          title: "All Restaurants",
        });
    });
  }
  
  
  module.exports = {
    new: newRes,
    create,
    index,
    show,
    update,
    edit,
    delete: deleteRestaurant,
  };
  
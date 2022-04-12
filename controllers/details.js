const Restaurant = require("../models/restaurant");



    function show(req, res) {
        Restaurant.findById(req.params.id, function(err, restaurant) {
            console.log(restaurant)
            res.render('restaurants/details', {
    restaurant, 
            });
    });
        };


module.exports = {
show, 
}; 


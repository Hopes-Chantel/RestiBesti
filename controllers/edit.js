const Restaurant = require("../models/restaurant");



    function show(req, res) {
        Restaurant.findById(req.params.id, function(err, restaurant) {
            res.render('restaurants/edit', {
    restaurant, 
            });
    });
        };


module.exports = {
show, 
}; 

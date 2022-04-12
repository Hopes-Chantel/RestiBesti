const express = require('express');
const router = express.Router();
	
// GET /restaurants/aboutus
router.get('/', function(req, res, next) {
    res.render('restaurants/roulette');
});

	
module.exports = router;


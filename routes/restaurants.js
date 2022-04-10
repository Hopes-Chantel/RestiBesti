const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');
const isLoggedIn = require('../config/auth')
	
router.get('/', restaurantsCtrl.index);
// GET /Restaurants/new
router.get('/new',isLoggedIn, restaurantsCtrl.new);
//Restaurants/ID
router.get('/:id', restaurantsCtrl.show);
// POST /Restaurants
router.post('/', restaurantsCtrl.create);
	
module.exports = router;


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
// GET /Restaurant
router.get('/:id/edit', restaurantsCtrl.edit);
// PUT /Restaurant
router.put('/:id', restaurantsCtrl.update);

router.delete('/:id', restaurantsCtrl.delete);
	
module.exports = router;


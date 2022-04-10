const express = require('express');
const router = express.Router();
const detailsCtrl = require('../controllers/details');
const isLoggedIn = require('../config/auth')
	
//Restaurants/ID
router.get('/:id',isLoggedIn, detailsCtrl.show);
// POST /Restaurants

	
module.exports = router;


const express = require('express');
const router = express.Router();
const editCtrl = require('../controllers/edit');
const isLoggedIn = require('../config/auth')
	
//Restaurants/ID
router.get('/:id',isLoggedIn, editCtrl.show);
// POST /Restaurants

	
module.exports = router;

	


const express = require('express');
const router = express.Router();
const rouletteCtrl = require('../controllers/roulette');

// GET /restaurants/aboutus
router.get('/', rouletteCtrl.index);
	
module.exports = router;


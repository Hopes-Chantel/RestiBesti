const express = require('express');
const router = express.Router();
const rouletteCtrl = require('../controllers/roulette');

router.get('/', rouletteCtrl.index);
	
module.exports = router;


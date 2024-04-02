const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/getSlots', adminController.getSlots);

router.post('/bookSlot',adminController.bookedSlot);

router.get('/getbookedSlots',adminController.getbookedSlots);

module.exports = router;

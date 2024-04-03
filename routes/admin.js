const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/getSlots', adminController.getSlots);

router.post('/bookSlot',adminController.bookedSlot);

router.get('/getbookedSlots',adminController.getbookedSlots);

router.delete('/deletebookedSlots/:id/:date',adminController.deletebookedSlots);

module.exports = router;

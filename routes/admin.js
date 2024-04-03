const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/getBooks', adminController.getBooks);

router.delete('/deletebook/:id',adminController.deletebook);

router.get('/getreturned',adminController.getreturnedBooks);

module.exports = router;


const express = require('express');
const router = express.Router();

// middlewares
const {verifyJWT, verifyRoles} = require('../middlewares/auth');

// controllers
const { addCourt, removeCourt, getCourt } = require('../controllers/court');


router.get('/get-court/:courtId', getCourt);
router.delete('/remove-court/:courtId', removeCourt);
router.post('/add-court', addCourt);

module.exports = router;
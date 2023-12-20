const express = require('express');
const router = express.Router();


// middlewares
const { verifyJWT, verifyRoles } = require('../middlewares/auth');

// controllers
const { getSchedule, removeSchedule } = require('../controllers/scheduler');

router.post('/schedule', verifyJWT, getSchedule);
router.delete('/schedule', verifyJWT, removeSchedule);
router.put('/schedule')

module.exports = router;
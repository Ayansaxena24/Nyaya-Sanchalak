const express = require('express');
const router = express.Router();


// middlewares
const { verifyJWT, verifyRoles } = require('../middlewares/auth');

// controllers
const { getSchedule } = require('../controllers/scheduler');

router.post('/schedule', verifyJWT, getSchedule);
// router.post('/current-user', authCheck, currentUser);
// router.post('/current-admin', authCheck, adminCheck, currentUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const ROLES_LIST = require('../config/rolesList');


// middlewares
const { verifyJWT, verifyRoles } = require('../middlewares/auth');

// controllers
const { changeStatus, aproveDailySchedule, assignNewDateToCase } = require('../controllers/judge');

// router.post('/create-or-update-user', authCheck, createOrUpdateUser);
// router.post('/current-user', authCheck, currentUser);
// router.post('/current-admin', authCheck, adminCheck, currentUser);

router.post('/change-status', verifyJWT, verifyRoles(8888), changeStatus);
router.post('/aprove', verifyJWT, verifyRoles(8888), aproveDailySchedule);
router.post('/assignNewDate', verifyJWT, verifyRoles(8888), assignNewDateToCase);

module.exports = router;
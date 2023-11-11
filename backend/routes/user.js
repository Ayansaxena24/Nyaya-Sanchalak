const express = require('express');
const router = express.Router();
const ROLES_LIST = require('../config/rolesList');


// middlewares
const { verifyJWT, verifyRoles } = require('../middlewares/auth');

// controllers
const { getUsers } = require('../controllers/user');

router.get('/get-users', verifyJWT, verifyRoles(8888), getUsers)

// router.post('/create-or-update-user', authCheck, createOrUpdateUser);
// router.post('/current-user', authCheck, currentUser);
// router.post('/current-admin', authCheck, adminCheck, currentUser);

module.exports = router;
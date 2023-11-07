const express = require('express');
const router = express.Router();

// middlewares
const {verifyJWT, verifyRoles} = require('../middlewares/auth');

// controllers
const { handleRefreshToken, handleRegister, handleLogin, handleLogout } = require('../controllers/auth');

router.post('/register', handleRegister);
router.post('/login', handleLogin);
router.get('/logout', handleLogout);
router.get('/refresh', handleRefreshToken);

module.exports = router;
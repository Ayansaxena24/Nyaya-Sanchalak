const express = require('express');
const router = express.Router();
const ROLES_LIST = require('../config/rolesList');


// middlewares
const { verifyJWT, verifyRoles } = require('../middlewares/auth');

// controllers
const { fileCase, registerCase, removeFiledCase, removeRegisteredCase, updateFiledCase, updateRegisteredCase } = require('../controllers/courtAdmin');

// File case
// router.post('/court/file-case', verifyJWT, verifyRoles(9999), fileCase)
router.post('/court/file-case', fileCase)
router.put('/court/file-case', verifyJWT, verifyRoles(9999), updateFiledCase)
router.delete('/court/file-case', verifyJWT, verifyRoles(9999), removeFiledCase);

// Register case
// router.post('/court/register-case', verifyJWT, verifyRoles(9999), registerCase);
router.post('/court/register-case', registerCase);
router.put('/court/register-case', verifyJWT, verifyRoles(9999), updateRegisteredCase);
router.delete('/court/register-case', verifyJWT, verifyRoles(9999), removeRegisteredCase);




module.exports = router;
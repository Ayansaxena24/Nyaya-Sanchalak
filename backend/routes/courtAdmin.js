const express = require('express');
const router = express.Router();
const ROLES_LIST = require('../config/rolesList');


// middlewares
const { verifyJWT, verifyRoles } = require('../middlewares/auth');

// controllers
const { fileCase, registerCase, removeFiledCase, removeRegisteredCase, updateFiledCase, updateCivilCase, updateCriminalCase, getFiledCase } = require('../controllers/courtAdmin');

// File case
router.post('/court/file-case-go', verifyJWT, verifyRoles(9999), getFiledCase)
router.post('/court/file-case', verifyJWT, verifyRoles(9999), fileCase)
router.put('/court/file-case', verifyJWT, verifyRoles(9999), updateFiledCase)
router.delete('/court/file-case', verifyJWT, verifyRoles(9999), removeFiledCase);

// Register case
router.post('/court/register-case', verifyJWT, verifyRoles(9999), registerCase);
router.put('/court/update-civil-case', verifyJWT, verifyRoles(9999), updateCivilCase);
router.put('/court/update-criminal-case', verifyJWT, verifyRoles(9999), updateCriminalCase);
router.delete('/court/register-case', verifyJWT, verifyRoles(9999), removeRegisteredCase);




module.exports = router;
const express = require('express');
const router = express.Router();
const ROLES_LIST = require('../config/rolesList');


// middlewares
const { verifyJWT, verifyRoles } = require('../middlewares/auth');

// controllers
const { fileCase, registerCase, removeFiledCase, removeRegisteredCase, updateFiledCase, updateRegisteredCase } = require('../controllers/courtAdmin');

// File case
router.post('/court/file-case', fileCase)
router.put('/court/file-case', updateFiledCase)
router.delete('/court/file-case', removeFiledCase);

// Register case
router.post('/court/register-case', registerCase);
router.put('/court/register-case', updateRegisteredCase);
router.delete('/court/register-case', removeRegisteredCase);




module.exports = router;
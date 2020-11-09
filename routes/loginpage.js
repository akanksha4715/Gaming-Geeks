const express = require('express');
const path = require('path');
const router = express.Router();

const logincontroller = require('../controllers/logincon');

router.get('/login',logincontroller.getloginpage);
router.post('/login',logincontroller.addlogindetails);

module.exports = router;      
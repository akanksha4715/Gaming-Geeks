const express = require('express');
const path = require('path');
const router = express.Router();

const logincontroller = require('../controllers/logincon');
//const isAuth = require('../checker/isAuth');
router.get('/login',logincontroller.getloginpage);
router.post('/login',logincontroller.addlogindetails);
router.get('/joined',logincontroller.getcart);

module.exports = router;      
const express = require('express');
const path = require('path');
const router =express.Router();
const joincontroller = require('../controllers/joinedcon');
//const isAuth = require('../checker/isAuth');
router.get('/userRegister',joincontroller.getpage);
router.post('/userRegister',joincontroller.postpage);
router.get('/logout',joincontroller.logout);

module.exports=router;
const express =require('express');
const path = require('path');
const router = express.Router();

const homecontroller = require('../controllers/homecon');

router.get('/home',homecontroller.showhome);

module.exports =router;
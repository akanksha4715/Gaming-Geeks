const express = require('express');
const path = require('path');
const router =express.Router();
const joincontroller = require('../controllers/joinedcon');
router.get('/joined',joincontroller.getpage);
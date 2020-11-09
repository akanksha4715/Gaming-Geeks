const express = require('express');
const path = require('path');
const routes = express.Router();

const errorcontroller = require('../controllers/404con');
const router = require('./loginpage');

router.get('*',errorcontroller.pagenotfound);

module.exports = router;
const express = require('express');
const path = require('path');
const router = express.Router();

const errorcontroller = require('../controllers/404con');


router.get('*',errorcontroller.pagenotfound);

module.exports = router;

const express = require('express');
const router = express.Router();
const main = require('../controllers/main');


router.get('/', main.getIndex);
//if not find any specific route which is 404


module.exports = router;
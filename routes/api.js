const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');
const mirrorController = require('../controllers/mirrorController');

router.get('/health', healthController.getHealth);
router.get('/mirror', mirrorController.mirrorWord);

module.exports = router;


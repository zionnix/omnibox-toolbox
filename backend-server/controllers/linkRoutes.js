const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

// La route ne contient plus de code complexe, elle appelle juste le contrôleur
router.get('/', linkController.getAllLinks);

module.exports = router;
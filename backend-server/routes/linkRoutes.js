const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/', linkController.getAllLinks);
router.post('/', linkController.createLink);
router.delete('/:id', linkController.deleteLink);
router.patch('/:id/click', linkController.trackClick);

module.exports = router;
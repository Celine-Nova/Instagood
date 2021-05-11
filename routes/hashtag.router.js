const express = require('express');
const router = express.Router();
const hashtag_controller = require('../controller/hashtag.controller');

// router.get('/', hashtag_controller.hashtag_list);


router.post('/', hashtag_controller.hashtag_add);

module.exports = router;
const express = require('express');
const router = express.Router();
const post_controller = require('../controller/post.controller');

router.get('/', post_controller.post_list);


router.post('/', post_controller.post_add);
router.post('/hashtag', post_controller.hashtag_add);

module.exports = router;
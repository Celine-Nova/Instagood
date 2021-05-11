const express = require('express');
const router = express.Router();
const comment_controller = require('../controller/comment.controller');

// router.get('/', comment_controller.comment_list);


router.post('/', comment_controller.comment_add);

module.exports = router;
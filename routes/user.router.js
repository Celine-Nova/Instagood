const express = require('express');
const router = express.Router();
const user_controller = require('../controller/user.controller');

// router.get('/', user_controller.user_list);


router.post('/', user_controller.user_add);

module.exports = router;
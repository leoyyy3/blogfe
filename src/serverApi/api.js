const express = require('express');
const router = express.Router();

const blogController = require('./blogController')

router.route('/blog/query').post(blogController.queryBlog);

module.exports = router;
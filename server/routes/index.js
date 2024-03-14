const express = require('express')
const router = express.Router()

// Registration routes
router.use(require('./register'));

module.exports = router;
const express = require('express') 
const router = express.Router()
const finishedController = require('../controllers/finished')

router.get('/', finishedController.completedPage)

module.exports = router
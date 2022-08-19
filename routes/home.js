const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) 

module.exports = router

//the sole job of the router is to hand off the request to the right controller  (8:00pm)
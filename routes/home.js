const express = require('express') // requires express module and stores it in express variable
const router = express.Router() // uses the router method from express and stores it into router variable
const homeController = require('../controllers/home') // importing the home controller from the controllers folder home.js file and storing it into homeController variable

router.get('/', homeController.getIndex) // router executes the get method that identifies the home route, sends the request to the home controller, causing the method attached to getIndex to display the response(of html (index.ejs))

module.exports = router // exports the router variable that contains the express.Router function
const EventController = require("../controllers/EventController");
var express = require('express');
var router = express.Router();
//const Router = require("./Router");



/* GET home page. */

router.get('/testing', EventController.testing); 
module.exports = router;

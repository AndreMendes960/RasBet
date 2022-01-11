const EventController = require("../controllers/EventController");
var express = require('express');
var router = express.Router();
//const Router = require("./Router");



/* GET home page. */

router.get('/testing', EventController.testing); 
router.post('/registar', EventController.registar); 
router.post('/login', EventController.login); 
module.exports = router;

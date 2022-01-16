const EventController = require("../controllers/EventController");
const CurrenciesController = require("../controllers/CurrenciesController")
var express = require('express');
var router = express.Router();
//const Router = require("./Router");



/* GET home page. */

router.get('/testing', EventController.testing); 
router.post('/registar', EventController.registar); 
router.post('/login', EventController.login); 
router.get('/currencies', CurrenciesController.list); 
router.post('/currencies', CurrenciesController.create); 
module.exports = router;

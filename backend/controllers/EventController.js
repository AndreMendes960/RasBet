const { json } = require("express");
//const { UUID } = require("sequelize/types");
const models = require("../models")
const { body } = require('express-validator');
const {event, user} = require("../models")
var file = require('./test.json');

function sleep(ms) {
  console.log("sleeping")
    return new Promise(resolve => setTimeout(resolve, ms));
  }

exports.testing = async function(req,res){
    var events =file.listEventsAll
    for (let k in events)
    {
      // await event.create({sport : events[k].event.sport,
      // type : events[k].event.type,
      // team1 : events[k].event.team1,
      // team2 : events[k].event.team2,
      // odd1 : events[k].event.result_odd.home,
      // odd2 : events[k].event.result_odd.tie,
      // odd3 : events[k].event.result_odd.away })
    }
  console.log(file)
  return res.status(200).json(file);
}

exports.testing2 = async function(req,res){
  //let events = json(file)

  console.log("here")
  // events.map((event, index) => (
  //   console.log("This is item number" + index +" : " + event)
  //   )); 
  return res.status(200).json(file);
  
}

exports.registar = async function(req,res){

  console.log(req.body.params)
  const user2 = await user.create(req.body.params)
  return  res.status(200).json(user2)


}

exports.login = async function(req,res){

  console.log(req.body.params)
  const user2 = await user.findOne({where : {email : req.body.params.email, password: req.body.params.password}})
  if(user2)
  {
    console.log("user exists")
  }
  else
  {
    console.log("user does not exist")
  }
  //const user2 = await user.create(req.body.params)
  //return  res.status(200).json(user2)


}
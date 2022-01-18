const { json } = require("express");
//const { UUID } = require("sequelize/types");
const models = require("../models");
const { body } = require("express-validator");
const { event, user, wallet, currency, aposta } = require("../models");
var file = require("./test.json");

function sleep(ms) {
  console.log("sleeping");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

exports.testing = async function (req, res) {
  var events = file.listEventsAll;
  for (let k in events) {
    const check = await event.findOne({where : {team1 : events[k].event.team1, status : "ongoing"}})

    if(check)
    {
      console.log("exists")
    }
    else
    {
    await event.create({
      sport: events[k].event.sport,
      type: events[k].event.type,
      team1: events[k].event.team1,
      team2: events[k].event.team2,
      odd1: events[k].event.result_odd.home,
      odd2: events[k].event.result_odd.tie,
      odd3: events[k].event.result_odd.away,
      status: "ongoing"
    });
    }
  }
  var list = await event.findAll();
  //console.log(list)
  return res.status(200).json(list);
};

exports.testing2 = async function (req, res) {
  //let events = json(file)

  console.log("here");
  // events.map((event, index) => (
  //   console.log("This is item number" + index +" : " + event)
  //   ));
  return res.status(200).json(file);
};

exports.registar = async function (req, res) {
  data = req.body.params;

  const curr = await currency.findOne();
  const curr2 = await currency.create({ name: "Euros" });
  const wallet2 = await wallet.create({ amount: "100", currency_id: curr2.id });
  data.wallet_id = wallet2.id;
  data.isAdmin = "false"
  const user2 = await user.create(data);
  return res.status(200).json(user2);
};

exports.login = async function (req, res) {
  const user2 = await user.findOne({
    where: { email: req.body.params.email, password: req.body.params.password },
    include: { model: wallet, as: "wallet" },
  });
  if (user2) {
    console.log("user exists");
    return res.status(200).json(user2);
  } else {
    console.log("user does not exist");
  }
  //const user2 = await user.create(req.body.params)
};

exports.fetch = async function (req, res) {
  const user2 = await user.findOne({
    where: { id: req.params.userid },
    include: {
      model: wallet,
      as: "wallet",
      include: { model: currency, as: "currency" },
    },
  });
  if (user2) {
    console.log("user exists");
    return res.status(200).json(user2);
  } else {
    console.log("user does not exist");
  }
};

exports.add = async function (req, res) {
  const user2 = await user.findOne({
    where: { id: req.body.params.user_id },
    include: {
      model: wallet,
      as: "wallet",
      include: { model: currency, as: "currency" },
    },
  });
  req.body.params.currency_id = user2.wallet.currency.id
  const bet = await aposta.create(req.body.params);
  console.log(bet);
  console.log(req.body.params);
};

exports.checkAdmin = async function (req, res) {
  const user2 = await user.findOne({
    where: { id: req.params.id }});
  console.log(user2);
  return res.status(200).json(user2.isAdmin);
};
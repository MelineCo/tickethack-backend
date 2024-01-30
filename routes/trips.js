var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const moment = require('moment')

/* GET trips listing. */
router.get('/', function (req, res) {
  const { departure, arrival, date } = req.body
  console.log(date)
  Trip.find({ departure: departure, arrival: arrival })
    .then((data) => {
      const trips = data.filter(e => moment(Number(e.date)).format("YYYY-MM-DD") === date)
      res.json({ result: true, Alltrips: trips })
    })
});

module.exports = router;


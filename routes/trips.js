var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const moment = require('moment')

/* GET trips listing. */
router.get('/:departure/:arrival/:date', function (req, res) {
  const { departure, arrival, date } = req.params
  console.log(date)
  Trip.find({ departure:{ $regex: new RegExp(departure, 'i') } , arrival: { $regex: new RegExp(arrival, 'i') }})
    .then((data) => {
      let newdate = new Date(date)
      const trips = data.filter(e => moment(Number(e.date)).format("YYYY-MM-DD") === moment(Number(newdate)).format("YYYY-MM-DD"))
      res.json({ result: true, Alltrips: trips })
    })
});

router.get('/:id', function (req, res) {
  Trip.findById( req.params.id )
    .then((trip) => {
      console.log(trip)
      res.json({ result: true, trip: trip })
    })
});

module.exports = router;

// router.get('/', function (req, res) {
//   const { departure, arrival, date } = req.body
//   console.log(date)
//   Trip.find({ departure: departure, arrival: arrival })
//     .then((data) => {
//       const trips = data.filter(e => moment(Number(e.date)).format("YYYY-MM-DD") === date)
//       res.json({ result: true, Alltrips: trips })
//     })
// });



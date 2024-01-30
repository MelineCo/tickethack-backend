var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');
const moment = require('moment')

/* CREATE booking. */
router.post('/new', function (req, res) {
  const { departure, arrival, date, price } = req.body

  const newBooking = new Booking({
    departure,
    arrival,
    date,
    price,
    isPaid: false
})

newBooking.save().then(() => res.json({ result: true }))

});

/* UPDATE booking. */
router.post('/new', function (req, res) {
    const { departure, arrival, date, price } = req.body
  
    const newBooking = new Booking({
      departure,
      arrival,
      date,
      price,
      isPaid: false
  })
  
  newBooking.save().then(() => res.json({ result: true }))
  
  });

module.exports = router;


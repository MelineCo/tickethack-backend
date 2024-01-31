var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');
const moment = require('moment')

/* GET bookings unpaid listing */
router.get('/', function (req, res) {
    Booking.find( {isPaid : false})
      .then((data) => {
        res.json({ result: true, AllBookings: data })
      })
  });

  /* GET bookings paid listing */
router.get('/booked', function (req, res) {
    Booking.find( {isPaid : true})
      .then((data) => {
        res.json({ result: true, AllBookings: data })
      })
  });

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
router.put("/update", (req, res) => {
    // Booking.find({ isPaid : false }).then((tripFound) => {
    //     if (!tripFound) {
    //         return res.json({ result: false, error: "Trip not found" })
    //     } else {
    //         Booking.updateMany({ isPaid : false }, { isPaid: true }).then((tripUpdated) => {
    //             return res.json({ result: true, tripUpdated })
    //         })
    //     }
    // })
    Booking.updateMany({ isPaid : false }, { isPaid: true }).then((tripUpdated) => {
        console.log("updated to true")
        return res.json({ result: true, tripUpdated })
    })
})

/* DELETE booking */
router.delete("/delete/:id", (req, res) => {
    Booking.deleteOne({ _id: req.params.id}).then(data => {
        if (data.deletedCount != 0) {
            res.json({ result: true, bookings: data });
        } else {
            res.json({ result: false, error: "Booking not found" });
        }
    })
})

module.exports = router;


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
router.put("/update", (req, res) => {
    const { _id } = req.body

    Booking.findOne({ _id }).then((tripFound) => {
        if (!tripFound) {
            return res.json({ result: false, error: "Trip not found" })
        } else {
            Booking.updateOne({ _id }, { isPaid: true }).then((tripUpdated) => {
                return res.json({ result: true, tripUpdated })
            })
        }
    })
})

/* DELETE booking */
router.delete("/delete", (req, res) => {
    Booking.deleteMany({ isPaid: false }).then((tripsDeleted) => {
        return res.json({ result: true, tripsDeleted })
       });
})

module.exports = router;


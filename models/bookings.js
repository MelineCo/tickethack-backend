//Schema BOOKING

const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    isPaid: Boolean,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;

// Pour export du modele : 
// const Booking = require('./models/bookings');
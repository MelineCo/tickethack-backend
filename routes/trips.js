var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

/* GET trips listing. */
router.get('/', function(req, res) {
    const { departure, arrival, date } = req.body
    
    Trip.find({departure : departure, arrival: arrival})
      .then((data) => {
        console.log(data)
        res.json({ result: true, Alltrips: data })
      })
      ;
  });

module.exports = router;


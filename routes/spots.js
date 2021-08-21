const router = require('express').Router();
const Spot = require('../models/Spot');


router.post('/', async (req, res) => {  // Create a new 'Spot' (POST)
  const newSpot = new Spot(req.body);

  try {
    const savedSpot = await newSpot.save();
    res.status(200).json(savedSpot);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', async (req, res) => {  // Read all 'Spots' (GET)
  try {
    const spots = await Spot.find();
    res.status(200).json(spots);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
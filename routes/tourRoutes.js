const express = require('express');
const router = express.Router();
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('./../controllers/tourController');

// router.param('id', checkID);

// Create if body constains the name and price property
// If not, send back 400 (bad request)

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;

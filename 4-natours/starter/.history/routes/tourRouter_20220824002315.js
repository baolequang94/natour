const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('xy', (req, res, next, val) => {
  console.log(`Tour id is ${val}`);
  next();
});
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:xy')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;

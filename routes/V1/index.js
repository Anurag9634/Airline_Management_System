const express = require('express');

const {FlightMiddlewares} =  require('../../middlewares/index')

const Citycontroller = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city', Citycontroller.create);
router.get('/city/:id', Citycontroller.get);
router.get('/city', Citycontroller.getAll);
router.delete('/city/:id', Citycontroller.destroy);
router.patch('/city/:id', Citycontroller.update);


router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);


router.post('/airports',AirportController.create);



module.exports = router;

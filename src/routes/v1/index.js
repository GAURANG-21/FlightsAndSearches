const express = require('express')
const {CityController,AirportController}= require('../../controllers/index')
const router = express.Router()

router.post('/city', CityController.create)
router.post('/cityall', CityController.createMultipleCities)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/cityairports/:id',CityController.getAllAirports)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)

router.post('/airport', AirportController.create)
router.delete('/airport/:id',AirportController.destroy)
router.get('/airport/:id',AirportController.get)
router.get('/airport',AirportController.getAll)
router.patch('/airport/:id',AirportController.update)

module.exports = router;
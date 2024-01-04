const {FlightService} = require('../services/index')
const {SuccessfulCodes,ClientErrorCodes} = require('../utils/error-codes')
const flightService = new FlightService(); 

const create = async (req, res)=>{
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessfulCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const getAll = async (req, res)=>{
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(SuccessfulCodes.OK).json({
            data: flights,
            success: true,
            message: "All flights fetched successfully",
            err: {}
        })
    } catch (error) {
       return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to fetch all flights",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll
}
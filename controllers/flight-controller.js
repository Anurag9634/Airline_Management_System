const {FlightService} = require('../services/index');
const flightService = new FlightService();

async function create(req ,res){   
    try{
         const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,        
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
         }
        const flight =  await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data : flight,
            mssg : "created flight succesfully",
            status : true, 
            error : {}
         });
    }
    catch(error){
         return res.status(500).json({
            data : {},
            success : false,
            mssg : "there was an error in flight controller",
            error : error
        })
    }
}

async function getAll(req ,res){   
    try{
         const response =  await flightService.getAllFlightData(req.query);
         return res.status(200).json({
            data : response,
            status : true, 
            error : {},
            mssg : "successfully fetched all  flight succesfully",
         });
    }
    catch(error){
         return res.status(500).json({
            data : {},
            success : false,
            mssg : "there was an error in flight controller",
            error : error
        })
    }
}

module.exports = {
    create,getAll

}
const {Flights} = require('../models/index');
const { Op } = require('sequelize');


class FlightRepository{  

    #createFilter(data) {
        const filter = {};
    
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
    
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
    
        if (data.maxPrice !== undefined  && data.minPrice !== undefined) {                   //
            Object.assign(filter,{
                [Op.and] :[
                   {price :{[Op.gte]: data.minPrice}},
                   {price :{[Op.lte]: data.maxPrice}}
                ]
            });
        }
  else {
    if(data.minPrice){
        Object.assign(filter,{
            price : {
                [Op.gte]: data.minPrice
            }
        });
    }

    if(data.maxPrice){
        Object.assign(filter,{
            price : {
                [Op.lte]: data.maxPrice
            }
        });
    }  
  }
             
        console.log('Filter:', filter);
        return filter;
    }

    async createFlight(data){
        try{             
            console.log(data);
            const flight = await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("there is an error while creating a flight")
            throw{error};
        }
    }
    

    //now for boarding pass we would need to get the data of the single flight based on the id of the flight

    async getFlight(FlightId){
        try{
            const flight = await Flights.findbyPk(FlightId);
            return flight;
        }
        catch(error){
            console.log("there is an error in repository layer")
            throw{error};
        }
    }

    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({

                where: filterObject,
                
                raw : true,
            });
          
            return flights;
        }
        catch(error){
            console.log("there is an error in repository layer")
            throw{error};
        }
    }
}


module.exports = FlightRepository;
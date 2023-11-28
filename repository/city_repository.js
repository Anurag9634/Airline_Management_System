const {Op}  =  require('sequelize')
const {City} = require("../models/index")

class CityRepository{

async createCity({name}){  
    try{
        const city = await City.create(
            {
                name
            }
        );
       return city;     
    }
    catch(error){
        console.log("there is an error while creating a city")
        throw{error};
    }
    }

    async deleteCity(cityid){
        try{    
        City.destroy({
            where :{
                id : cityid
            }
        });
        return true;
        }
        catch(error){
            console.log("there is an error while deleting  a city")
            throw{error};
        }
    }


    async getCity(cityid)
    {
        try{
            const city = await City.findOne({
                where: {
                    id : cityid,
                }
            })         
          return city;
        }
        catch(error)
        {
            throw {error}
        }
    }

     async getAllCities(filter){
        try{
            if(filter.name)
            {
                const cities = await City.findAll({
                    where:{
                        name: {
                            [Op.startsWith] : filter.name
                        }
                       
                    }
                });
                return cities; 
         
            }    
            const cities = await City.findAll();
            return cities;       
        }
        catch(error){
           throw{error};   
        }
    }

    async updateCity(cityid, data){     
        try{
            // const city = City.update( data, {
            //     where :{
            //         id : cityid
            //     }
            // })      
            // return data;
         
            const city = await City.findByPk(cityid);
            city.name = data.name;
            await city.save();
            return city;

        }
        catch(error)
        {
            throw {error}
        }    
    }
}



module.exports =  CityRepository


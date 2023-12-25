const {Airplane}    = require('../models/index');


class AirplaneRepository{

    async getAirplane(id){

        try{
              const airplane = await Airplane.findOne({
            where: {
                id: id
            }
        });
        return airplane;
    }
    catch(error){
        console.log('there is problem in repository layer');
        throw {error}
    }
      


}

}


module.exports = AirplaneRepository;
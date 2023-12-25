const {AirportService} = require('../services/index');
const aiportService = new AirportService();
async function create (req, res ){
    try{
        const response = await aiportService.create(req.body);
        return res.status(201).json({
            mssg : "airport created successfully",
            data : response,
            status : true,
            err : {},          
        })
    }
    catch(error){
        return res.status(500).json({
            data : {},
            status : false,
            err : error,
            mssg : "something went wrong in creating airport"
        })
    }


}

module.exports ={
    create,
}
const {City} = require('../models/index.js')

class CityRepository{
    async createCity({name}){
        try{
            // console.log(name, {name})
            const city = await City.create({name});
            return city;
        }
        catch(error){
            console.log("object")
            throw {error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            })
        }
        catch(error){
            throw {error}
        }
    }
}

module.exports = CityRepository
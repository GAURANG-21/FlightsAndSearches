const {City} = require('../models/index.js')

class CityRepository{
    
    async createCity({name})  {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            await City.update(data, {
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    
    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            console.log(city);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer", error);
            throw { error };
        }
    }    
}

module.exports = CityRepository
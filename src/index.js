const express =  require("express")
const {PORT} = require('./config/serverConfig.js')
const bodyParser = require('body-parser')

// const CityRepository = require('./repository/city-repository.js')

const ApiRoutes = require('./routes/index')

const setupAndStartServer = async() =>{
    const app = express();

    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', ApiRoutes);
    
    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env)
        // const repo = new CityRepository();
        
        // repo.createCity({name: "chennai"});
        // repo.deleteCity(20);
        // repo.updateCity(3, {
        //     name : "Chennai"
        // });

        // awaitconsole.log(repo.getCity(1));
        // const findCity = await repo.getCity(2);
        // console.log(findCity.dataValues.name)
        
    });}

setupAndStartServer();
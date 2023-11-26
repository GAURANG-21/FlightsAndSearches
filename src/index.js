const express =  require("express")
const {PORT} = require('./config/serverConfig.js')
const bodyParser = require('body-parser')
const CityRepository = require('./repository/city-repository.js')

const setupAndStartServer = async() =>{
    const app = express();
    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env)
        const repo = new CityRepository();
        // repo.createCity({name: "agra"});
        // repo.deleteCity(13);
        // repo.updateCity(13, {
        //     name : "agra"
        // });

        // awaitconsole.log(repo.getCity(1));
        console.log((await repo.getCity(1)));

    app.use(bodyParser);
    app.use(bodyParser.urlencoded({extended:true}));
    });}

setupAndStartServer();
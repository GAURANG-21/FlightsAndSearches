const express =  require("express")
const {PORT} = require('./config/serverConfig.js')
const bodyParser = require('body-parser')

const setupAndStartServer = async() =>{
    const app = express();
    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env)
    });

    app.use(bodyParser);
    app.use(bodyParser.urlencoded({extended:true}));
}

setupAndStartServer();
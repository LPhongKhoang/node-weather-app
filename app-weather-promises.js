// Get yargs module
const yargs = require('yargs');

// Get my busines module
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs
    .option({
        a : {
            describe: "Address to fetch weather",
            demand: true,
            alias: "address",
            string: true

        }
    })
    .help()
    .alias("h", "help")
    .argv;

// Get axios module: (which is Promise based HTTP client for the browser and node.js)
const axios = require('axios');

var encodeAddress = argv.address ? encodeURIComponent(argv.address) : '19146';
var urlAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
axios.get(urlAddress)
    .then((response)=>{
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find this address');
        }else if(!response.data){
            throw new Error("Server does not response anything");
        }

        console.log(response.data.results[0].formatted_address);
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;   
        var urlWeather = `https://api.darksky.net/forecast/4fc6e1e693a10a357d21acd69af97b61/${lat},${lng}`;
        return axios.get(urlWeather);

    })
    .then((response)=>{
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's ${temperature}. It likes ${apparentTemperature}`);
    })
    .catch((e)=>{
        if(e.code === 'EAI_AGAIN'){
            console.log("Unable connect to API server");
        }else{
            console.log(e);
        }
    });


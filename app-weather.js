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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
        console.log(results);
    }else{
        console.log(results);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, results)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(JSON.stringify(results, undefined, 2));
                console.log(`It's currentlyy ${results.temperature}. It feel like ${results.apparentTemperature}.`);
            }
        });
    }
});






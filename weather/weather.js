const request = require('request');


var getWeather = (latitude, longitude, callback) =>{
    request({
        url: `https://api.darksky.net/forecast/4fc6e1e693a10a357d21acd69af97b61/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback("Unable to connect to Forecast API server");
        }else if(response.statusCode === 400){
            callback("Unable to get weather forecast");
        }else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};



module.exports = {
    getWeather
}
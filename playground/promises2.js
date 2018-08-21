
// Get request module
const request = require('request');

var geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{
        var encodeAddress = encodeURIComponent(address);

        // Send http request to sever
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            json: true
        }, (error, response, body)=>{
            // because we have json: true (above) => error, response, body is are a js object
            // and in response object has property: body (--> body in para is reference to response.body)
            // if url is wrong or we don't have internet --> error (otherwise, everything is great, error = null)

            // so we want to print it nicely in console
            // console.log(body);
            // console.log(JSON.stringify(body, undefined, 4)); // 4 is indent value

            // Handling all error can occur with this request
            if(error){
                reject("Unable to connect to Google Serve");
            }else if(!body){
                reject("Wrong with url: Server can not response anything");
            }
            else if(body.status === "ZERO_RESULTS"){
                reject("Unable to find this address");
            }else if(body.status === "OK"){
                // Now we want to print formatted_address, latitude and longitude of this location
                var my_loc = body.results[0];
                var address = my_loc.formatted_address;
                var latitude = my_loc.geometry.location.lat;
                var longitude = my_loc.geometry.location.lng;
                resolve({
                    address,
                    latitude,
                    longitude
                });
            }

        
        });
    });
};


geocodeAddress('19146').then((location)=>{
    console.log(JSON.stringify(location, undefined, 2));
}, (error)=>{
    console.log(error);
});
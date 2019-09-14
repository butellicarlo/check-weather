//9cf3769c0d0e1e8634996e6205d5d837
let request = require('request');
let http = require('http');

let apiKey = process.env.NODE_WEATHER_API_KEY
let city = process.argv[3]
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function(err, response, body) {
    if(err) {
        console.log('error:', console.err);
    } else {
        //console.log('body:', body);
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log(message);
    }
});


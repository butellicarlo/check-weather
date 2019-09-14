let request = require('request');

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


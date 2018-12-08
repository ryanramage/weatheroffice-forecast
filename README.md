weatheroffice forecast
=====================

Use the environment canada data feed to get the json data for a weather station, including the hourly forecast data.

Usage:
------

    npm i weatheroffice-forecast --save

Then

    const forecast = require('weatheroffice-forecast')
    forecast.get('http://dd.weatheroffice.gc.ca/citypage_weather/xml/AB/s0000045_e.xml', (err, data) => console.log(err, data))


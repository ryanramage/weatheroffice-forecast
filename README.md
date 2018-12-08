weatheroffice forecast
=====================

Use the environment canada data feed to get the json data for a weather station, including the hourly forecast data.

Usage:
------

    npm i weatheroffice-forecast --save

Then

    const forecast = require('weatheroffice-forecast')
    forecast.get('http://dd.weatheroffice.gc.ca/citypage_weather/xml/AB/s0000045_e.xml', (err, data) => console.log(err, data))

Data will look like

```
{
    "current": {
        "temperature": -4.5,
        "dewpoint": -12,
        "windChill": -9,
        "windSpeed": 10,
        "windDir": "SSW"
    },
    "hourly": [
        {
            "condition": "Clear",
            "temperature": -4,
            "windChill": -8,
            "windSpeed": 10,
            "windDir": "S",
            "timeInfo": "201812082300",
            "date": "2019-01-09T06:00:00.075Z",
            "humane": "1/8/2019, 11:00:00 PM"
        },
        {
            "condition": "Clear",
            "temperature": -3,
            "windChill": -5,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090000",
            "date": "2019-01-09T07:00:00.079Z",
            "humane": "1/9/2019, 12:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -3,
            "windChill": -5,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090100",
            "date": "2019-01-09T08:00:00.079Z",
            "humane": "1/9/2019, 1:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -3,
            "windChill": -5,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090200",
            "date": "2019-01-09T09:00:00.079Z",
            "humane": "1/9/2019, 2:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -3,
            "windChill": -5,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090300",
            "date": "2019-01-09T10:00:00.079Z",
            "humane": "1/9/2019, 3:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -5,
            "windChill": -7,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090400",
            "date": "2019-01-09T11:00:00.079Z",
            "humane": "1/9/2019, 4:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -6,
            "windChill": -9,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090500",
            "date": "2019-01-09T12:00:00.079Z",
            "humane": "1/9/2019, 5:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -8,
            "windChill": -11,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090600",
            "date": "2019-01-09T13:00:00.079Z",
            "humane": "1/9/2019, 6:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -9,
            "windChill": -11,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090700",
            "date": "2019-01-09T14:00:00.079Z",
            "humane": "1/9/2019, 7:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -9,
            "windChill": -12,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090800",
            "date": "2019-01-09T15:00:00.079Z",
            "humane": "1/9/2019, 8:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -10,
            "windChill": -13,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812090900",
            "date": "2019-01-09T16:00:00.079Z",
            "humane": "1/9/2019, 9:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -10,
            "windChill": -13,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091000",
            "date": "2019-01-09T17:00:00.079Z",
            "humane": "1/9/2019, 10:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -11,
            "windChill": -14,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091100",
            "date": "2019-01-09T18:00:00.080Z",
            "humane": "1/9/2019, 11:00:00 AM"
        },
        {
            "condition": "Clear",
            "temperature": -11,
            "windChill": -14,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091200",
            "date": "2019-01-09T19:00:00.080Z",
            "humane": "1/9/2019, 12:00:00 PM"
        },
        {
            "condition": "Clear",
            "temperature": -12,
            "windChill": -15,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091300",
            "date": "2019-01-09T20:00:00.080Z",
            "humane": "1/9/2019, 1:00:00 PM"
        },
        {
            "condition": "Clear",
            "temperature": -13,
            "windChill": -16,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091400",
            "date": "2019-01-09T21:00:00.080Z",
            "humane": "1/9/2019, 2:00:00 PM"
        },
        {
            "condition": "Clear",
            "temperature": -14,
            "windChill": -17,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091500",
            "date": "2019-01-09T22:00:00.080Z",
            "humane": "1/9/2019, 3:00:00 PM"
        },
        {
            "condition": "Sunny",
            "temperature": -12,
            "windChill": -15,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091600",
            "date": "2019-01-09T23:00:00.080Z",
            "humane": "1/9/2019, 4:00:00 PM"
        },
        {
            "condition": "Sunny",
            "temperature": -10,
            "windChill": -13,
            "windSpeed": 5,
            "windDir": "VR",
            "timeInfo": "201812091700",
            "date": "2019-01-10T00:00:00.080Z",
            "humane": "1/9/2019, 5:00:00 PM"
        },
        {
            "condition": "Sunny",
            "temperature": -8,
            "windChill": -13,
            "windSpeed": 10,
            "windDir": "SE",
            "timeInfo": "201812091800",
            "date": "2019-01-10T01:00:00.080Z",
            "humane": "1/9/2019, 6:00:00 PM"
        },
        {
            "condition": "Sunny",
            "temperature": -7,
            "windChill": -12,
            "windSpeed": 10,
            "windDir": "SE",
            "timeInfo": "201812091900",
            "date": "2019-01-10T02:00:00.080Z",
            "humane": "1/9/2019, 7:00:00 PM"
        },
        {
            "condition": "Sunny",
            "temperature": -7,
            "windChill": -11,
            "windSpeed": 10,
            "windDir": "SE",
            "timeInfo": "201812092000",
            "date": "2019-01-10T03:00:00.080Z",
            "humane": "1/9/2019, 8:00:00 PM"
        },
        {
            "condition": "Sunny",
            "temperature": -6,
            "windChill": -10,
            "windSpeed": 10,
            "windDir": "SE",
            "timeInfo": "201812092100",
            "date": "2019-01-10T04:00:00.080Z",
            "humane": "1/9/2019, 9:00:00 PM"
        },
        {
            "condition": "Sunny",
            "temperature": -7,
            "windChill": -12,
            "windSpeed": 10,
            "windDir": "SE",
            "timeInfo": "201812092200",
            "date": "2019-01-10T05:00:00.080Z",
            "humane": "1/9/2019, 10:00:00 PM"
        }
    ]
}
```

const forecast = require('.')

const url = 'http://dd.weatheroffice.gc.ca/citypage_weather/xml/AB/s0000045_e.xml'

forecast(url, function (err, data) {
  console.log(JSON.stringify(data, null, 4))
})

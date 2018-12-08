const request = require('request')
const xml2js = require ('xml2js')
const get = require('lodash.get')
const fecha = require('fecha')

module.exports = function (src, done) {
  request.get(src, function (err, resp, body) {
    if (err) return done(err)
    xml2js.parseString(body, function (err, json) {
      if (err) return done(err)
      let data = json.siteData
      if (!data) return done(new Error('No site data'))
      delete data['$']
      let forecast = {}
      forecast.hourly = getHourly(data)
      done(err, forecast)
    })
  })
}

function getHourly (data) {
  let hourly = get(data, 'hourlyForecastGroup[0].hourlyForecast')
  let clean = []
  hourly.map(function (item) {
    console.log(item)
    let timeInfo = get(item, '$.dateTimeUTC')
    let ts = fecha.parse(timeInfo, 'YYYYMMDDHHmm')
    let humane = fecha.format(ts, 'YYYY-MM-DD HH:mm:ss')
    humane = ts.toLocaleString()
    // timeInfo is a string like '201811291530' or 'YYYYMMDDHHMM'
    console.log(timeInfo, ts, humane)
  })
}

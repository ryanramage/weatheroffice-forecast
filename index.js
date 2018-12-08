const request = require('request')
const xml2js = require ('xml2js')
const get = require('lodash.get')

module.exports = function (src, done) {
  request.get(src, function (err, resp, body) {
    if (err) return done(err)
    xml2js.parseString(body, function (err, json) {
      if (err) return done(err)
      let data = json.siteData
      if (!data) return done(new Error('No site data'))
      delete data['$']
      let forecast = {}
      forecast.current = currentConditions(data)
      forecast.hourly = getHourly(data)
      done(err, forecast)
    })
  })
}

function currentConditions (data) {
  let temperature = Number(get(data, 'currentConditions[0].temperature[0]._'))
  let dewpoint = Number(get(data, 'currentConditions[0].dewpoint[0]._'))
  let windChill = Number(get(data, 'currentConditions[0].windChill[0]._'))
  let windSpeed = Number(get(data, 'currentConditions[0].wind[0].speed[0]._'))
  let windDir = get(data, 'currentConditions[0].wind[0].direction[0]')
  return {temperature, dewpoint, windChill, windSpeed, windDir}
}

function getHourly (data) {
  let hourly = get(data, 'hourlyForecastGroup[0].hourlyForecast')
  let clean = []
  return hourly.map(function (item) {
    let timeInfo = get(item, '$.dateTimeUTC')
    let date = toDate(timeInfo)
    let humane = date.toLocaleString()
    // timeInfo is a string like '201811291530' or 'YYYYMMDDHHMM'
    let [condition] = item.condition
    let temperature = Number(get(item, 'temperature[0]._'))
    let windChill = Number(get(item, 'windChill[0]._'))
    let windSpeed = Number(get(item, 'wind[0].speed[0]._'))
    let windDir = get(item, 'wind[0].direction[0]._')

    return {condition, temperature, windChill, windSpeed, windDir, timeInfo, date, humane}
  })
}

function toDate (eStr) {
  let d = new Date()
  let year = Number(eStr.substring(0, 4))
  let month = Number(eStr.substring(4,6))
  let day = Number(eStr.substring(6,8))
  let hour = Number(eStr.substring(8,10))
  let min = Number(eStr.substring(10,12))
  d.setFullYear(year, month, day)
  d.setHours(hour, min, 0)
  return d
}

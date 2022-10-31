const request = require('request')
const xml2js = require ('xml2js')
const get = require('lodash.get')
const { parse } = require('date-fns')
const { utcToZonedTime, zonedTimeToUtc, format } = require('date-fns-tz')

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
    const timeZone = 'America/Edmonton'
    const zonedDate = utcToZonedTime(date, timeZone)
    const pattern = 'hh:mm aaa'
    const humane = format(zonedDate, pattern, { timeZone: 'America/Edmonton' })

    // timeInfo is a string like '201811291530' or 'YYYYMMDDHHMM'
    let [condition] = item.condition
    let temperature = Number(get(item, 'temperature[0]._'))
    let windChill = Number(get(item, 'windChill[0]._'))
    let windSpeed = Number(get(item, 'wind[0].speed[0]._'))
    let windDir = get(item, 'wind[0].direction[0]._')
    let windGust = Number(get(item, 'wind[0].gust[0]._', null))
    let precipitationChance = get(item, 'lop[0].$.category', 'none')
    let precipitationPercent = Number(get(item, 'lop[0]._'))

    return {date, humane, condition, temperature, windChill, windSpeed, windDir, windGust, precipitationChance, precipitationPercent}
  })
}

function toDate (eStr) {
  const str = eStr + '-0000' // comes in as utc time in a weird format
  let d = parse(str, 'yyyyMMddHHmmXXXX', new Date())
  return d
}

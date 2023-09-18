const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=857f561235bd2840707a4a402d9c7637&query=' + latitude + ',' + longitude +'&units=f'


request({url, json: true }, (error, { body}) => {
    if (error) {
        callback('unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('unable to find location', undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. it feels like "+ body.current.feelslike + " degress out. ")
    }
})
}
module.exports = forecast
//const url = 'http://api.weatherstack.com/current?access_key=11199071f3bf755946687fd1325660d8&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike +' degrees.')
//     }
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     //console.log(response)
//     //console.log(response.body.current)
// })
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=11199071f3bf755946687fd1325660d8&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find weather description. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike +' degrees. The humidity is '+ body.current.humidity +'.')
        }
    })
}

module.exports = forecast
const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e8e6e078e2695a3de1027016f93d50f3&query=' + latitude + ',' + longitude + '&units=f'

    request({url : url, json: true}, (error,{body}) => {
        if(error){
            callback('Unable to connect to Weather Service!',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out. " + "The humidity is " + body.current.humidity + "%."
            )
        }
    })
}

module.exports = forecast
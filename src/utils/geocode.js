const request = require('request')

const geocode = (address, callback)=>{
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+ encodeURIComponent(address) +'&limit=1&appid=519c4481ea41c288c2a82fe005c0cae4'

    request({url: url, json: true},(error, {body})=>{

        if(error){
            callback('unable to connect to server', undefined)
        }else if(body.length === 0){
            callback('there is no city by this name', undefined)
        }else{
            callback(undefined, {
                latitude: body[0].lat,
                longitudie: body[0].lon,
                location: body[0].name + ', ' + body[0].country
            })
       }
    })
}

module.exports = geocode
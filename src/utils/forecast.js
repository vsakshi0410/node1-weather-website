const request = require('postman-request')
const forecast =(latitude,longitude,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=480357ba88306018e12b356a3982e4cd&query='+latitude+','+longitude+'&units=f'
request({url, json: true}, (error, {body}={})=>{
    if(error){
        callback("Unable to connect with the network",undefined)
    }else if(body.error){
        callback("Unable to get the response",undefined)
    }else{
    callback(undefined, `It is currently ${body.current.temperature} degrees out. Its feel like ${body.current.feelslike} and I like the weather and enjoying it. Hurray!!!!`)
    }
})
}
module.exports = forecast
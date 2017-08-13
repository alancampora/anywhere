const currentPositionService = {
    baseUrl: "http://nominatim.openstreetmap.org/",
    reverse: "reverse?",
    search: "search?",
    lat: "lat=",
    lon: "lon=",
    city: "city=",
    format: "format=json&",
    options: "&zoom=18&addressdetails=1"
}

currentPositionService.getCity = (query, type) => {
    let url = currentPositionService.baseUrl;
    url += currentPositionService.reverse + currentPositionService.format;
    // add latitude | longitude
    url += currentPositionService.lat + query.latitude + "&";
    url += currentPositionService.lon + query.longitude + "&" + currentPositionService.options;
    return currentPositionService.getData(url);
}

currentPositionService.getData = (url) => {
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

currentPositionService.getCityByString = (city) => {
    // http: //nominatim.openstreetmap.org/search/?city=nuremberg&format=json
    let url = currentPositionService.baseUrl;

    // FIXME: avoid errors with undefined query
    if (!city) {
        return;
    }
    url += currentPositionService.search + currentPositionService.format;
    url += currentPositionService.city + city;
    return currentPositionService.getData(url);
}

export default currentPositionService

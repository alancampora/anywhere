const blablaService = {
  baseUrl: "http://localhost:3500/get/blabla/?",
  lat: "lat=",
  lon: "lon=",
  page: "page=",
}

blablaService.search = function(query,page) {
  let url = this.baseUrl

  // add latitude | longitude
  url += blablaService.lat + query.latitude +"&"+ blablaService.lon + query.longitude +"&"+ blablaService.page + page;


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

export default blablaService

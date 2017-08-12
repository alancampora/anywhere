const blablaService = {
  baseUrl: "https://public-api.blablacar.com/api/v2/trips?",
  key: "key=bec1eafb73de4b77a3934f0b7088d674",
  fc: "fc="
}

blablaService.search = function(query, type) {
  let url = `${this.baseUrl}`

  // add latitude | longitude
  url += blablaService.fc + encodeURI(query.latitude + '|' + query.longitude) +"&"+ blablaService.key;


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

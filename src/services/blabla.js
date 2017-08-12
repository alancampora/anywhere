const blablaService = {
  baseUrl: "https://public-api.blablacar.com/api/v2/trips?fn=Heidelberg&key=bec1eafb73de4b77a3934f0b7088d674"
}

blablaService.search = function (query, type) {
  const url = `${this.baseUrl}`

  return fetch(url, { method: 'GET' })
    .then(res => {
      if (res.status !== 200) {
        throw res.statusText
      }
      return res.json()
    })
}

export default blablaService

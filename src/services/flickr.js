const flickrService = {
  baseUrl: "https://api.flickr.com/services/rest/?",
  authToken: "auth_token=72157685013754423-a975daf6a06c36a7&",
  key:"api_key=195f9e6bfd8621d296c7852591b97a54&",
  methods: {
      photoSearch:"method=flickr.photos.search",
      getInfo:"method=flickr.photos.getInfo&"
  },
  format: "format=json",
  noJsonCallback: "&nojsoncallback=1"
}
flickrService.photoSearch = function(lat, lon) {
  let url = this.baseUrl

  url += flickrService.methods.photoSearch + "&" +flickrService.key +"&" + "lat=" + lat + "&lon=" + lon + "&" + flickrService.format + flickrService.noJsonCallback;

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

flickrService.getInfo = function(photoId) {
  let url = this.baseUrl

  url += flickrService.methods.getInfo + "&" +flickrService.key +"&" + "photo_id=" + photoId +"&" + flickrService.format +  flickrService.noJsonCallback;

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
export default flickrService

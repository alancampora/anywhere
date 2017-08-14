<template>
    <div>
        <loader v-show="isLoading"></loader>
        <div class='header'>
            <h1>{{ msg }}</h1>
            <searchbar v-bind:locationFrom="cityFrom" @change="changePosition" ></searchbar>
        </div>
      <router-view :results="results" @more='more'></router-view>
    </div>
</template>

<script>
import Loader from "./Loader.vue"
import Searchbar from "./Searchbar.vue"
import Results from "./Results.vue"
import Router from "../router.js"

import currentPositionService from '../services/currentPositionService'
import blabla from '../services/blabla'
import flickr from '../services/flickr'

export default {
    name: "Layout",
    components:{ Loader, Searchbar,Results},
    props:{
        msg:{
            type:String,
            default: 'Tell me where to go, anywhere is ok'
        }
    },
    data(){
        return {
            query: "",
            results: [],
            isLoading: false,
            pages: null,
            cityTo:{
                cityName:'',
                lat:0,
                lon:0
            },
            cityFrom:{
                cityName:'',
                lat:0,
                lon:0
            },
            currentPage: 1
        }
    },
    methods:{
        search(page){
            let _self = this;
            this.isLoading = true;
            var geolocationOptions = {
                enableHighAccuracy: true,
                maximumAge:Infinity
            };

            var getPosition = function (options) {
                return new Promise((resolve, reject) =>{
                    navigator.geolocation.getCurrentPosition(resolve, reject, geolocationOptions);
                });
            }

            getPosition()
                .then((position) => {
                    currentPositionService.getCity(position.coords).then(res=>{
                        _self.cityFrom.cityName=res.address.city;
                        _self.cityFrom.lat=res.lat;
                        _self.cityFrom.lon=res.lon;
                    })
                    this.searchTrips({from:{lat:position.coords.latitude,lon:position.coords.longitude}},this.currentPage)
                })
                .catch((err) => {
                    //TODO send message error
                    console.error(err.message)
                });
        },
        searchTrips(coords,currentPage){
            let _self = this;
            blabla.search(coords.from, currentPage)
                .then(res =>
                    {
                        res.forEach(trip => {
                            flickr.photoSearch(trip.arrivalPlace.latitude, trip.arrivalPlace.longitude)
                                .then( data => {
                                    var photo = data.photos.photo[0]
                                    trip.photo =
                                        `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                                    //this is not ok
                                    this.$forceUpdate();
                                })
                                .catch( error => console.log("error:", error))
                        })

                        if(_self.results.length > 0){
                            _self.results = _self.results.concat(res)
                        }
                        else{
                            _self.results = res
                        }

                        _self.isLoading = false
                        _self.currentPage += _self.currentPage
                    })
        },
        more(){
            this.search()
        },
        changePosition(newPosition){
            this.results = [];
            this.searchTrips(newPosition,1)
        }
    },
    created(){
        this.search(this.currentPage);
    }
}
</script>

<style>
.header{
    background-color:white;
    overflow:hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index:2;
}
</style>

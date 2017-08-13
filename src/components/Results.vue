<template>
    <div class="results">
        <loader v-show="isLoading"></loader>
        <searchbar :locationFrom="cityFrom" @change="changePosition" ></searchbar>
        <div class="results__places">
            <card v-for="result in results"
                :key="result.permanent_id"
                :photo="result.photo"
                :departureDate="result.departureDate"
                :departureHour="result.departureHour"
                :duration = "result.duration"
                :arrivalPlace="result.arrivalPlace.cityName">
            </card>
        </div>
        <button class="results__more" v-on:click="more">
            <p> More Results </p>
        </button>
    </div>
</template>

<script>
import blabla from '../services/blabla'
import flickr from '../services/flickr'
import currentPositionService from '../services/currentPositionService'
import Card from "./Card.vue"
import Loader from "./Loader.vue"
import Searchbar from "./Searchbar.vue"

export default{
    name: "Results",
    components:{ Card, Loader, Searchbar},
    data(){
        return{
            query: "",
            results: [],
            isLoading: false,
            pages: null,
            cityTo:'',
            cityFrom:'',
            currentPage: 1
        }
    },
    methods:{
        search(page){
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
                        this.cityFrom={
                            cityName:res.address.city,
                            lat:res.lat,
                            lon:res.lon,
                        }
                    })
                    this.searchTrips({from:{lat:position.coords.latitude,lon:position.coords.longitude}},this.currentPage)
                })
                .catch((err) => {
                    //TODO send message error
                    console.error(err.message)
                });
        },
        searchTrips(coords,currentPage){
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

                        if(this.results.length > 0){
                            this.results = this.results.concat(res)
                        }
                        else{
                            this.results = res
                        }

                        this.isLoading = false
                        this.currentPage += this.currentPage
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
        this.search()
    }
}
</script>

<style>
.results__places{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>


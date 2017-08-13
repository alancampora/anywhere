<template>
<div class="results">
        <loader v-show="isLoading"></loader>
        <searchbar :from="cityName"></searchbar>
        <div class="results__places">
            <card v-for="result in results"
                :key="result.permanent_id"
                :departureDate="result.formattedData.departureDate"
                :departureHour="result.formattedData.departureHour"
                :duration = "result.formattedData.duration"
                :arrivalPlace="result.arrival_place.city_name">
              </card>
        </div>
        <button class="results__more" v-on:click="more">
            <p> More Results </p>
        </button>
    </div>
</template>

<script>
    import blabla from '../services/blabla'
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
                cityName:'',
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
                return new Promise(function (resolve, reject) {
                  navigator.geolocation.getCurrentPosition(resolve, reject, geolocationOptions);
                });
              }

                getPosition()
                    .then((position) => {
                        currentPositionService.getCity(position.coords).then(res=>{
                            this.cityName =res.address.city;
                        })

                  blabla.search(position.coords, this.currentPage)
                    .then(res =>
                      {
                          res.trips.forEach(trip => {
                              var splittedDate = trip.departure_date.split(" ");
                              trip.formattedData = {}
                              trip.formattedData.departureDate = splittedDate[0]
                              trip.formattedData.departureHour = splittedDate[1]
                              trip.formattedData.duration = Math.round(trip.duration.value / 3600)
                          })

                          console.log("res" ,res);
                          if(this.results.length > 0){
                              this.results = this.results.concat(res.trips)
                          }
                          else{
                              this.results = res.trips
                          }

                        this.isLoading = false
                        this.currentPage += this.currentPage
                      })
                })
                .catch((err) => {
                  //TODO send message error
                  console.error(err.message)
                });

            },
            more(){
                this.search()
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
}
</style>


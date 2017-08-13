<template>    
<div class="results">
        <div class="results__places"> 
            <card v-for="result in results" 
                :key="result.permanent_id"
                :departure="result.departure_date"
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
    import Card from "./Card.vue"

    export default{
        name: "Results",
        components:{ Card }, 
        data(){
            return{
                query: "",
                results: [], 
                isLoading: false, 
                pages: null
            }
        }, 
        methods:{
            search(){
              this.isLoading = true;
              var geolocationOptions = {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge:Infinity
              };

              var getPosition = function (options) {
                return new Promise(function (resolve, reject) {
                  navigator.geolocation.getCurrentPosition(resolve, reject, geolocationOptions);
                });
              }

              getPosition()
                .then((position) => {
                  blabla.search(position.coords)
                    .then(res =>
                      {
                        console.log(res)
                          if(this.results.length > 0){ 
                              this.results = this.results.concat(res.trips)
                          }
                          else{
                              this.results = res.trips
                          }
                        this.isLoading = false
                        this.currentPage = res.pager.page
                      })
                })
                .catch((err) => {
                  //TODO send message error
                  console.error(err.message);
                });

            }, 
            more(){
                this.search();
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


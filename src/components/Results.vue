<template>

    <div class="results">
        <card v-for="result in results"
            :key="result.permanent_id"
            :departure="result.departure_date"
            :arrivalPlace="result.arrival_place.city_name">
        </card>
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
            isLoading: false
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
                                this.results = res.trips
                                this.isLoading = false
                            })
                })
                .catch((err) => {
                    //TODO send message error
                    console.error(err.message);
                });

        }
    },
    created(){
        this.search()
    }
}
</script>

<style>
.results{
    width: 100%;
    height: 100%;
}
</style>


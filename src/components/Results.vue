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
                blabla.search(this.query)
                    .then(res =>
                    {
                        console.log(res)
                        this.results = res.trips
                        this.isLoading = false
                    })
            } 
        }, 
        created(){
            this.search()            
        }
    } 
</script>

<style>
.results{
    display:flex;
}
</style>


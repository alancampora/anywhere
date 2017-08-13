<template>
    <div class="results">
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
import Card from "./Card.vue"

export default{
    name: "Results",
    components:{ Card},
    props:{
        results: {
            type:Array,
            default:function(){
                return []
            }
        }
    },
    methods:{
        more(){
            this.$emit("more")
        }
    }
}
</script>

<style>
.results__places{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}
.results{
    overflow:scroll;
    margin-top: 150px;
}
</style>


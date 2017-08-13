<template>
    <div class="card">
        <h2> {{arrivalPlace}}</h2>
        <img class="card__img" v-bind:src="photo"></img>
        <p class="card__date">{{departureDate}}</p>
        <div class="card__wrapper">
            <p class="card__wrapper__hour"> Hour: {{departureHour}} </p>
            <p class="card__wrapper__duration"> duration: {{duration}} h </p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Card",
        props: {
            duration:{
                type: Number
            },
            departureDate: {
                type: String
            },
            departureHour: {
                type: String
            },
            arrivalPlace: {
                type: String
            },
            photo: {
                type: String
            }
        }
    }
</script>

<style>
.card{
    margin: 20px;
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card__img{
    width: 100%;
    max-height: 200px;
}
.card__date{
    font-size: .9rem;
}

.card__wrapper{
    display: flex;
}
.card__wrapper__hour,
.card__wrapper__duration{
    flex:1;
    margin: 10px;
    font-weight: bold;
}
</style>

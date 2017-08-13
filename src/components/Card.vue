<template>
    <div class="card">
        <div class="card__header">
            <h2 class="card__header__text"> {{arrivalPlace}}</h2>
            <img class="card__header__img" v-bind:src="photo"></img>
        </div>
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
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: box-shadow 0.9s ease-in-out;
}
.card__header{
    position:relative;
}
.card__header__text{
    position: absolute;
    bottom: 10px;
    width: 100%;
    background-color: rgba(157, 187, 63, 0.85);
    margin: 0;
    font-weight: 900;
}
.card__header__img{
    margin: 0;
    width: 100%;
    height: 200px;
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

<template>
    <div class="card">
        <p> {{arrivalPlace}}</p>
        <img class="card__img" src="../assets/img.png"></img>
        <p> Departure: {{departure}}</p>
    </div>
</template>

<script>
    export default{
        name: "Card",
        props: {
            departure: {
                type: String
            },
            arrivalPlace: {
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
    width: 75%;
}
</style>

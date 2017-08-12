<template>
    <div class="card">
        <p> {{departure}}</p>
        <p> {{arrivalPlace}}</p>
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
    width: 100%; 
    height: 100%;
}
</style>

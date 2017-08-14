<template lang="html">
    <div class="loader-container">
        <div class="loader"> </div>
    </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style scoped>
.loader-container{
    position:fixed;
    width:100%;
    height:100%;
    z-index:3;
    top:0;
    background-color:rgba(3,3,3,0.2);
}
.loader {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index:4;
    margin: -75px 0 0 -75px;
    border: 16px solid rgba(172, 197, 92, 0.29);
    border-radius: 50%;
    border-top: 16px solid #acc55c;
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>

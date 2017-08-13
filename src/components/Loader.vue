<template lang="html"> 
    <div class="loader"> </div>
</template> 

<script> 
    export default {
        name: "Loader"
    }
</script> 

<style scoped>
.loader {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 1;
  margin: -75px 0 0 -75px;
  border: 16px solid rgba(243, 243, 243, 0.29);
  border-radius: 50%;
  border-top: 16px solid #3498db;
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

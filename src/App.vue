<template>
    <div id="app">
        <layout></layout>
    </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
    name: 'app',
    components:{ Layout }
}
</script>

<style>
#app {
    font-family: 'Open Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.icon{
    font-family: "icomoon";
}

body{
    margin-left:0;
    margin-right:0;
    font-family:'Open Sans';
}
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

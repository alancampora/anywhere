<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <results></results>
    </div>
</template>

<script>
import Results from './components/Results.vue'

export default {
    name: 'app',
    data () {
        return {
            msg: 'Tell me where to go, anywhere is ok'
        }
    },
    components:{ Results }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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

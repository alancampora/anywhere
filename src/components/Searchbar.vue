<template>
    <div class="searchbar">
        <input class='inputPosition'></input>
        <input class='inputPosition' placeholder="Anywhere"></input>
    </div>
</template>

<script>
export default{
    name: "Searchbar",
    props: {
        departure: {
            type: String
        }
    },
    data(){
        return{
            from: 'From',
            to: 'Anywhere'
        }
    }

}
</script>

<style>
.searchbar{
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left:0;
    margin-right:0;
    padding :10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.inputPosition{
    height: 30px;
    width: 250px;
    padding-left:5px;
    margin-left:20px;
    font-size:14px;
}
</style>

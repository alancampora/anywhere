<template>
    <div class="searchbar">
        <div class='from'>
            <span class='icon currentIcon'></span>
            <input class='inputPosition' v-bind:value="from"></input>
        </div>
        <div class='to'>
            <span class='icon nextPositionIcon'></span>
            <input class='inputPosition' placeholder="Anywhere"></input>
        </div>
        <div class='settings'>
        </div>
    </div>
</template>

<script>
export default{
    name: "Searchbar",
    props: {
        from: {
            type: String
        },
        to: 'Anywhere'
    },

}
</script>

<style>
.searchbar{
    display:flex;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left:0;
    margin-right:0;
    padding :10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.to{
    flex-grow:1;
}
.from{
    flex-grow:1;
    margin-right:10px;
}
.settings{
    flex-grow:3;
}
.currentIcon{
    color:#009e47
}
.currentIcon:after{
    content:'\e948'
}

.nextPositionIcon{
    color:#009e47
}
.nextPositionIcon:after{
    content:'\e947'

}
.inputPosition{
    height: 30px;
    width: 250px;
    padding-left:5px;
    margin-left:20px;
    font-size:14px;
}
</style>

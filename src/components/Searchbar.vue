<template>
    <div>
        <div class="searchbar">
            <div class='from'>
                <span class='icon currentIcon'></span>
                <input class='inputPosition' v-model="locationFrom.cityName" @change="onChangeFrom()" v-bind:value="locationFrom.cityName"></input>
            </div>
            <div class='to'>
                <span class='icon nextPositionIcon'></span>
                <input class='inputPosition' v-model="locationTo.cityName" @change="onChangeTo()" placeholder="toPlaceholder"></input>
            </div>
            <div class='settings'>
            </div>
        </div>
        <ul class="filter places" v-bind:class="isSearching">
            <li class='nameListItem' v-on:click="selected(place)" v-for="place in places">{{place.display_name}}</li>
        </ul>
    </div>
</template>

<script>

import currentPositionService from '../services/currentPositionService'

export default{
    name: "Searchbar",
    props: {
        isLoading: {
            type:Boolean
        },
        locationFrom:{
            type: Object,
            default: function () {
                return {cityName:""}
            }
        },
        locationTo:{
            type: Object,
            default: function () {
                return {cityName:""}
            }
        },
        selectedItem:"",
        toPlaceholder: 'Anywhere',
        searchLaunched:false,
        changeFrom:false,
        changeTo:false,
        places:[]
    },
    computed:{
        isSearching(){
            return {
                showSearch:this.searchLaunched
            };
        }
    },
    methods:{
        onChangeTo(data){
            this.changeTo = true;
            this.searchPlacesByName( this.locationTo.cityName);
        },
        onChangeFrom(data){
            this.changeFrom = true;
            this.searchPlacesByName(this.locationFrom.cityName);
        },
        searchPlacesByName(name){
            this.searchLaunched = true;
            currentPositionService.getCityByString(name).
                then((data)=>{
                    this.places = data;
                })
        },
        selected(place){
            this.searchLaunched = false;
            let newSelected = {cityName:place.display_name,lat:place.lat,lon:place.lon};
            if(this.changeTo){
                this.locationTo = newSelected;
            }else{
                this.locationFrom= newSelected;
            }
            this.changeTo=false;
            this.changeFrom=false;
            this.$emit('change',{from:this.locationFrom, to:this.locationTo})
        }
    }
}
</script>

<style>
.searchbar{
    display:flex;
    margin-top: 20px;
    margin-left:0;
    margin-right:0;
    padding :10px;
    border-bottom:1px solid rgba(0, 0, 0, 0.2);
}
.filter{
    list-style-type: none;
    padding: 0;
    background: white;
    border: 1px solid;
    margin-top: -30px;
    width: auto;
    z-index: 2;
    position: absolute;
    margin-left: 25%;
    margin-right: 25%;
    display:none;
    visibility: visible;
}
.showSearch{
    display:block;
    visibility: none;
}
.to{
    flex-grow:1;
}
.from{
    flex-grow:1;
    margin-right:10px;
}
.nameListItem{
    display:block;
    padding:10px;
    margin:0;
}
.nameListItem:hover{
    background-color:#009e47;
    color:white;
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

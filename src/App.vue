<template>
  <div id="app">

    
  <nvb/>

  <wmnct/>

 
 <router-view></router-view>
 
  <!--<sly/>

  <hmcrd/> -->

</div>


</template>


<script>
//import Carousel from './components/Carousel.vue'

import getdatas from './components/getdatas.js';

import Navbar from './components/Navbar.vue'

import Category from './components/Category.vue'

//import Homecard from './components/Homecard.vue'

export default {
  name: 'App',
  components: {
    //sly : Carousel,
    nvb : Navbar,
    wmnct : Category
    //hmcrd : Homecard
  },
  created(){
    getdatas.getdata()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

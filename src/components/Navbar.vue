<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" > <div class="font-weight-bold">  E-COM  </div> </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">

          <div v-for= "categor in category" :key= "categor.id" >
  <b-dropdown id="dropdown-1" :text= "categor.name" class="m-md-2"></b-dropdown>

</div></b-nav-item> <!--<router-link active-class="active" to="/path" exact tag="li">WOMEN</router-link>-->
          
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
   
</template>

<script>

import getdatasnavbar from './getdatasnavbar';


  export default {
    data(){
      return {
          category : []
        
      }
    },
    created(){
      getdatasnavbar.getdatanavbar().then((res)=>{
        this.category  = res.data.children_data
        
      })
    },
    
  }
</script>



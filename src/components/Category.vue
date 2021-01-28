<template>
      
<div class="container">
    <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-md-3">
             <b-card
                :title = "post.name" :img-src= "`https://store.therelated.com/media/catalog/product/cache/84c53f0847035d2675c1d71de00956c9${post.custom_attributes[0].value}`" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2" >
                <b-card-text> 
                   
                </b-card-text>
                 <b-button href="#" variant="primary"> Add to Cart ${{ post.price }} </b-button>
            </b-card>        
        </div>        
    </div>
</div>
</template>

<script>
import getdatas from './getdatas';

export default {
  //props : [],
data(){
      return {
          posts : []
          
        
      }
    },
    created(){
      console.log(this.$route.params.id)
      getdatas.getdata(this.$route.params.id).then((res)=>{
        this.posts = res.data.items
        
        console.log(this.posts)
      })
    }
}
</script>

<style>

</style>


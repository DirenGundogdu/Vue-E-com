<template>
      
<div class="container">
    <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-md-3">
             <b-card
                title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2" >
                <b-card-text>
                    {{ post.name }}
                </b-card-text>
                 <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>        
        </div>


        
    </div>
</div>
</template>

<script>
import getdatas from './getdatas';

export default {
data(){
      return {
          posts : []
        
      }
    },
    created(){
      getdatas.getdata().then((res)=>{
        this.posts = res.data.items
      })
    }
}
</script>

<style>

</style>



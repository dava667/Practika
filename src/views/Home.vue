<template>
<div class="container">

  <div class="row mt-5">
     <div class="col-md-3 mb-3">
      </div>

      <div class="col-md-6 mb-3">
     <h3>«Checkout these amazing concerts in Graz.».</h3>
      </div>

      <div class="col-md-3 mb-3">
      </div>
    </div>

<div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
  <div class="col" v-for="product in allProducts" :key="product.id">
    <div class="card">
      <div class="card-body tx">
        <p class="card-title">{{product.data}}</p>
        <h5 class="card-text">{{product.artist}}</h5>
        <p class="card-text">{{product.locat}}</p>
        <my-button :id="product.id"/>
        
         <router-link class="nav-link " :to="{name: 'Detale', params:{id: product.id}}">Информация</router-link>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import MyButton from '../components/Button.vue'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      filterModel: " ",
      serchModel: " ",
      products: [ ],
    }
  },
name: 'Home',
components:{
MyButton
},
computed:{
...mapGetters(['allProducts', 'allCategoryes']),
   profucts(){
     return this.productsModel;
   }
},
methods: {
  filter(){
    this.productsModel = this.$store.getters.filterPeoductsByCategory(this.filterModel)
  },
  wotch: {
   serchModel(val){
     return this.productsModel
   }
  }
},
created(){
  this.productsModel = this.allProducts
}
}

</script>

<style >
 .tx{
     text-align: center;
 }
 .mr{
     margin-top: 50px;
 }
</style>

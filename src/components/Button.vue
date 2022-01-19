<template>
  <button type="button" class="btn btn-secondary" @click="add" >В корзину</button>
</template>

<script>
export default {
 props: {
     id:{
         type: Number,
         reg: true,
     },
 },
 methods:{
     add(){
    this.$store.dispath('addProductsToBasket', this.id)
     }
 }
}
</script>

<style>

</style>
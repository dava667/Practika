<template>
<div class="container">
    <div class="row mr">
        <div class="col">
            <h1>Корзина</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th>id</th>
                      <th>Вид</th>
                      <th>Название</th>
                      <th>Дата</th>
                      <th>Цена</th>
                      <th>Описание</th>
                      <th>Удалить</th>
                      <th>Подробнее</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in basket" :key="product.id">
                      <th>{{index}}</th>
                      <th><img  :src="product.img" class="rounded float-left img" alt="..."></th>
                      <th>{{product.name}}</th>
                      <th>{{pryse.data}}</th>
                      <th>{{product.pryse}}$</th>
                      <th>Покупай</th>
                      <th><button type="button" class="btn btn-danger">Удалить</button></th>
                      <th><router-link type="button" class="btn btn-success" to="/">Подробнее</router-link></th>
                      </tr>
                </tbody>
            </table>
            <tfoot>
                <tr>
                    <td colspan="6"><strong>Общ сумма:{{allPrise}}</strong></td>
                </tr>
            </tfoot>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
data(){
    return{
        basket:[]
    }
},
computed:{
    ...mapGetters(['allPrise'])
},
 created(){
  this.basket= this.$store.getters.getBasket
 }
}
</script>

<style>
.mr {
    margin-top: 70px ;
}
.img{
    width: 30px;
    height: 30px;
}
</style>
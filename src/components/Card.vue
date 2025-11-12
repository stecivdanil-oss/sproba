<script setup>
import UiLike from './UiLike.vue';

defineProps({
   item:Object

})
let emit = defineEmits(['addToBasket'])
function add(prod){
emit('addToBasket', prod)
}
</script>

<template>
<div class="card">
    <div class="LoveItem">
      <img :src="item.image " alt="">
        <div class="ui">
          <UiLike/>
       </div>
    </div>
<h3>name:{{ item.name }}</h3>
<p>price:{{ item.price }}</p>
<button @click="add(item)">замовити</button>
</div>
</template>

<style scoped>
.card{
    width: calc(670px / 3);
    /* height: 330px; */
    position: relative;
    background-color: var(--main-color);
    padding:10px 10px ;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.card:hover{
    padding: 20px;
    transition: 0.2s;
}
img{
    width: 100%;
    height: 230px;
    border-radius: 8px;
}
h3,p{
    text-align: center;
}
.LoveItem{
    position: relative;
    display: inline-block;
}
.LoveItem img{
    display: block;

}
.LoveItem .ui{
    position: absolute;
    top: 10px;
    right: 24px;
}
</style>

<script setup>
import { ref } from 'vue';
import ItemCard from '../components/ItemCard.vue';

let info = 'mycompany'
let clicks = ref(0)
let name = ref('')
let check = ref(true)
</script>


<template>
<h1 :class="check?'h1':''">hello {{ name }}</h1>
<button @click="clicks +=1" >aaa</button>
<button @click = " check = !check">change color</button>
<div v-show = "check">
  <img src="./assets/vue.svg" alt="">

<input type="text" v-model="name">
 <ItemCard/>
     </div>
 </template>
<style scoped>
.h1{
  background-color: orange;
}
</style>
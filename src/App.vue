<script setup>
import { ref } from 'vue';
import Heder from './components/Heder.vue';

import ItemCard from './components/ItemCard.vue';

let info = 'mycompany'
let clicks = ref(0)
let name = ref('')
let check = ref(true)

</script>

<template>
<Heder :name = "info" :count = "clicks" />

<h1 :class="check?'h1':''">hello {{ name }}</h1>
<button @click="clicks +=1" >aaa</button>
<button @click = " check = !check">change color</button>
<div v-show = "check">
  <img src="./assets/vue.svg" alt="">
</div>
<input type="text" v-model="name">
 <ItemCard/>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
  font-family: sans-serif;
}
.h1{
  background-color: orange;
}
</style>

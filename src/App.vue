<script setup>
import { ref } from 'vue';
import Heder from './components/Heder.vue';

import ItemCard from './components/ItemCard.vue';

let info = 'mycompany'
let clicks = ref(0)
let name = ref('')
let check = ref(true)

import { products } from './Data';
import Card from './components/Card.vue';
import Futer from './components/Futer.vue';
import Parse from './components/Parse.vue';

let data =products




</script>

<template>
<body>
  

<Heder :name = "info" :count = "clicks" />

<h1 :class="check?'h1':''">hello {{ name }}</h1>
<button @click="clicks +=1" >aaa</button>
<button @click = " check = !check">change color</button>
<div v-show = "check">
  <img src="./assets/vue.svg" alt="">

<input type="text" v-model="name">
 <ItemCard/>
     </div>
       <div class="conteiner">
        <Card v-for="el in data" :item =  "el" />
       </div>
     
 <div class="parces">
 <Parse />
 </div>
 <Futer/>
 </body>
</template>

<style scoped>

body{
  width: 100%;
  padding: 0;
  margin: 0;
   background-color: aliceblue;
}
.container {
  text-align: center;
  margin-top: 40px;
  font-family: sans-serif;
   
}
.h1{
  background-color: orange;
}
.conteiner{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
   
}

body{
  width: 100%;
  padding: 0;
  margin: 0;
   background-color: aliceblue;
}
.parces{
  margin-top: 40px;
}
</style>

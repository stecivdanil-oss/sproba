<script setup>
import { ref } from 'vue';
// import Heder from './components/Heder.vue';

import ItemCard from '../components/ItemCard.vue';

let info = 'mycompany'
let clicks = ref(0)
let name = ref('')
let check = ref(true)


import Card from '../components/Card.vue';
// import Futer from './components/Futer.vue';
import Parse from '../components/Parse.vue';
import { products } from '../Data';
let data =products




</script>

<template>
<body>
  

<!-- <Heder :name = "info" :count = "clicks" /> -->


       <div class="conteiner" style="margin-top:40px ;">
        <Card v-for="el in data" :item =  "el" />
       </div>
     
 <div class="parces">
 <Parse />
 </div>
 
 
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

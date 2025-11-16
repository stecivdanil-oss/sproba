<script setup>
import { computed, ref } from 'vue';
// import Heder from './components/Heder.vue';



let info = 'mycompany'
let clicks = ref(0)
let name = ref('')
let check = ref(true)


import Card from '../components/Card.vue';
// import Futer from './components/Futer.vue';
import Parse from '../components/Parse.vue';
import { products } from '../Data';
let data =products


let search = ref('')
let filtered_data = computed(()=>{
  return products.filter(el=>el.name.toLowerCase().includes(search.value.toLowerCase()))
});
let zemov = ref([])
let quantity = computed(()=>
{return zemov.value.length})
function addItems (item){
  let itemExist = zemov.value.find(el=>el.name ==item.name)
  if (itemExist){
itemExist.quantity+=1
  }
  else{
    
    zemov.value.push({...item,quantity:1})
  }
  
  
  // console.log(zemov.value)
  console.log(zemov.value[0].price)
}

</script>

<template>
<body>
  
 <div style="margin-top: 20px">
<router-Link to="/basket" >basket <span>{{ quantity }}</span></router-Link>
 </div>
<!-- <Heder :name = "info" :count = "clicks" /> -->
   <div class="search">
    <input type="text" v-model="search">
    <img src="https://cdn-icons-png.flaticon.com/128/9177/9177086.png" alt="">
   </div>

       <div class="conteiner" style="margin-top:40px ;">
        <Card v-for="el in filtered_data" :item =  "el" @add-to-basket="addItems"/>
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
.search{
  
  background-color: aquamarine;
  height: 40px;
  width: 300px;
  position: relative;
  margin: 40px auto 40px;
  border-radius: 16px;
}
input{
  height: 100%;
  width: 100%;
  border-radius: 16px;
  text-align: center;
  border: none;
  outline: none;
 box-shadow: 5px 5px 15px aquamarine;
}
img{
  height: 24px;
  width: 24px;
  position: absolute;
  right: 4%;
  top: 25%;
}
span{
    padding: 8px 12px;
    background-color: orange;
    border-radius: 50%;
    text-decoration: none;
}
a{
    text-decoration: none;
}
</style>

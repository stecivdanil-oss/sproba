<script setup >
import { useRoute } from 'vue-router'
import { products } from '../data'   
import UiLike from '../components/UiLike.vue'
import Item from './Item.vue';
import { ratigs } from '../data';
defineProps({
    item:Object

})

const route = useRoute()
const id = Number(route.params.id)


const item = products.find(p => p.id === id)
</script>

<template>
 <section>
       <div class="card">
      <div class="cardDescription">
          <div class="photoCard">
               
             <img class="photo" :src="item.image " alt="">
           
          </div>
          <div class="description">
               <h3>{{item.name}}</h3> 
           <p>description</p>
          </div>
      </div>
<div class="buy">
   <div class="buyLove">
     <p class="available">is available</p>
   <div class="ui">
          <UiLike></UiLike>
   </div>
   </div>
  <p class="price">{{ item.price }} грн</p> 
  <button>buy</button>
</div>
</div>
 <div class="reviews">
     <div class="a">
          <a href="#">characteristics</a>
          <a href="#">reviews</a>
     </div>
     <h4>reviews</h4>
     <Item/>
 </div>
 </section>
</template>
<style scoped>
section{
     background-color: aliceblue;
      padding: 40px 20px;
}
.photoCard{
    min-height: 440px;
    background-color: white;
    max-width: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
}
.photo{
    width: 90%;
    border-radius: 12px;
}
.card{
      display: flex;
      
      gap: 20px;
  
}
.cardDescription{
     display: flex;
      
      gap: 20px;
     flex-flow: 2;
}
.description{

background-color: white;
border-radius: 12px;
padding: 20px;
/* height: max-content; */
flex-flow: 2;
 
}
.buy{
  background-color: white;
  border-radius: 12px;
  flex-flow: 1;
  padding: 20px;
  height: max-content;
}
.buyLove{
     display: flex;
     gap: 20px;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     
}
.ui{
     left: 100px;
}
.price{
     font-weight: bolder;
     font-size: 24px;
}
.available{
     color: rgb(28, 219, 28);
}
button{
     width: 200px;
     background-color: var(--main-color);
     border-radius: 6px;
     padding: 8px 12px;
}
.reviews{
     margin-top: 40px;
     background-color: white;
border-radius: 12px;
padding: 20px;
}
.a{
     display: flex;
     flex-direction: row;
     gap: 20px;
     text-decoration: none;
     border-bottom:  1px solid black;
     padding-bottom: 8px;
}
.a a{
 text-decoration: none;
 color: black;

}
</style>
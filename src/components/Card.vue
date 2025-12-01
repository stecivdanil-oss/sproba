<script setup>
import UiLike from './UiLike.vue';

// defineProps({
//    item:Object

// })

const props = defineProps({
   item: Object
})


let emit = defineEmits(['addToBasket'])
function add(prod){
emit('addToBasket', prod)
}
import { useRouter } from 'vue-router'
const router = useRouter()

// item.id приходить з пропсів
const goToPage = (itemId) => {
    
    // ПЕРЕВІРТЕ: У полі `name` має бути "FullcardDetail"
    router.push({ 
        name: 'FullcardDetail', 
        params: { id: props.item.id }
    })
}

</script>

<template>
<div class="card">
    <div 
   
     class="LoveItem">
      <img @click="goToPage(item.id)" :src="item.image " alt="">
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
    /* padding: 20px; */
    transform: scale(1.05);
    transition: 0.2s;
}
img{
    width: 100%;
    height: 230px;
    border-radius: 8px;
}
h3,p{
    text-align: center;
    margin-bottom: 0px;
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
p{
    margin-bottom: 10px;
}
button{
    border-radius:12px ;
    padding: 8px 16px;
    border-style: none;
    cursor: pointer;
}
button:hover{
    background-color: rgb(105, 110, 110);
    color: aliceblue;
    transition: 0.2s;
}
</style>
<!-- <script setup>
import UiLike from './UiLike.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  item: Object
})

const emit = defineEmits(['addToBasket'])

function add() {
  emit('addToBasket', props.item)
}

const router = useRouter()

function goToPage() {
  router.push(`/item/${props.item.id}`)
}
</script>

<template>
  <div class="card" @click="goToPage">
    <div class="LoveItem">
      <img :src="item.image" alt="" />
      <div class="ui">
        <UiLike />
      </div>
    </div>

    <h3>name: {{ item.name }}</h3>
    <p>price: {{ item.price }}</p>
    
    <button @click.stop="add">Замовити</button>
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
    /* padding: 20px; */
    transform: scale(1.05);
    transition: 0.2s;
}
img{
    width: 100%;
    height: 230px;
    border-radius: 8px;
}
h3,p{
    text-align: center;
    margin-bottom: 0px;
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
p{
    margin-bottom: 10px;
}
button{
    border-radius:12px ;
    padding: 8px 16px;
    border-style: none;
    cursor: pointer;
}
button:hover{
    background-color: rgb(105, 110, 110);
    color: aliceblue;
    transition: 0.2s;
}
</style> -->

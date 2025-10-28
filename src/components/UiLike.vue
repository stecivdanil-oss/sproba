<script setup>
import { ref } from 'vue';
let onlike = ref (true)
const toggleLike = () => {
  onlike.value = !onlike.value;
};
</script>

<template>
    <div class="like" >
       <div v-show="onlike"  >
        <button  @click="toggleLike" class="icon-button"><img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt=""></button>
       </div>
       <div v-show="!onlike" >
        <button  @click="toggleLike" class="icon-button"> <img src="https://cdn-icons-png.flaticon.com/128/2077/2077502.png" alt=""></button>
       </div>
    </div>
</template>
<style scoped >
.like {
border-radius: 6px;
width:16px;
height: 16px;
background-color: white;

}
img{
 width:16px ;
height: 16px;  
padding: 2px;
}
button{
    border-radius: 6px;
    border-style: none;
}
</style>
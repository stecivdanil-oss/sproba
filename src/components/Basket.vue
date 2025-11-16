<script setup>
import zemov from '../pages/Home.vue'
let zamov = zemov
defineProps({
   item:Object

})
</script>
<template>
    це сторрінка замовленя
  <div>
    <img src="" alt="">
    <h3>{{ zamov.name }} </h3>
    <p> {{ zamov.value[0].price }}</p>
  </div>
</template>
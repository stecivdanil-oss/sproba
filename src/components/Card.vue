<script setup>
defineProps({
   item:Object

})
</script>

<template>
<div class="card">
<img :src="item.image " alt="">
<h3>name:{{ item.name }}</h3>
<p>price:{{ item.name }}</p>
</div>
</template>

<style scoped>
.card{
    width: calc(890px / 3);
    height: 330px;
    position: relative;
}
img{
    width: 100%;
    height: 210px;

}
h3,p{
    text-align: center;
}
</style>

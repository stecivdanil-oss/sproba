<script setup>
defineProps({
   item:Object

})
</script>

<template>
<div class="card">
<img :src="item.image " alt="">
<h3>name:{{ item.name }}</h3>
<p>price:{{ item.price }}</p>
</div>
</template>

<style scoped>
.card{
    width: calc(670px / 3);
    height: 330px;
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
    padding: 20px;
    transition: 0.2s;
}
img{
    width: 100%;
    height: 230px;
    border-radius: 8px;
}
h3,p{
    text-align: center;
}
</style>

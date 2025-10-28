<script setup>
import UiLike from './UiLike.vue';

import ChangeColor from './ChangeColor.vue';

</script>

<template>
<div class="card">
    <div class="photo">
    <UiLike/>
    </div>
    <ChangeColor/>
    <h4>name item</h4>
    <p>discription</p>
    <h3>XXX,XX UAH</h3>
</div>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card{
    background-color: #FF9B9B;
    width: 160px;
    height:243px ;
    border-radius: 6px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 50px;
}
.photo{
    background-color:#D9D9D9 ;
    border-radius: 6px;
    height:154px ;
    display: flex;
    justify-content: end;
    padding-right: 24px;
    padding-top: 10px;
}
h3{
font-weight: bolder;
font-size: 10px;

}
p{
    font-size: 10px;
    font-weight: lighter;
}
h4{
    font-size: 12;
}
.card:hover{
    height: 120%;
    width: 168px;
    
}
</style>

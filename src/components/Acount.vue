<script setup>
import { useLoginStore } from '../login/loginStore';

let auth = useLoginStore()
</script>
<template>
<div>
    <img src="../assets/images/Group1.svg" alt="">
    <p>name:{{ auth.user.name }}</p>
    <p>role: {{ auth.user.role }}</p>
    <p>email</p>
    <button @click="auth.logout">exit</button>
</div>
</template>
<style scoped>
div{
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
img{
    width: 32px;
}
</style>
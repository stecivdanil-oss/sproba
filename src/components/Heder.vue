<script setup>
import { useLoginStore } from '../login/loginStore';

defineProps({
    name: String,    
    count: Number
})
// import { computed, ref } from 'vue'
// let zemov = ref([100])
// let quantity = computed(()=>
// {return zemov.value.lenght})
let auth = useLoginStore( )
</script>

<template>
<header>
    <div class="conteiner">
        <div class="menu">
            <img style="width: 52px;" src="../assets/images/Group1.svg" alt="">
            <nav>
                <router-Link to="/">Home</router-Link>
                <router-Link to="/about">About</router-Link>
                <router-Link to="/attempt">Attempt</router-Link>
                <router-Link to="/item">Item</router-Link>
                
                
                <router-Link to="/login">вхід</router-Link>
                 <button v-if="auth.user" @click="auth.logout">exit</button>
                 <!-- <router-Link to="/basket" >basket <span>{{ quantity }}</span></router-Link> -->
            </nav>

        </div>
    </div>
    
</header>
</template>

<style scoped>
header{
    background-color: var(--main-color);
    padding: 8px 0;
}
.conteiner{
    max-width: 900px;
    margin: 0 auto;
}
.menu{

    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
nav{
    display: flex;
    gap: 20px;
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

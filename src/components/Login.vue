<script setup>
import { useRouter } from 'vue-router';
import { useLoginStore } from '../login/loginStore';
import { ref } from 'vue';
let auth = useLoginStore()
let name = ref('')
let password = ref('')
let check = ref('')
let go = useRouter()

async function  userLogin(){
    let success = await auth.login(name.value, password.value)
    if(success){
        go.push("/")
    }
    else{
        check.value = 'ви не на сайті'
    }
}
</script>

<template>
<div class="section">
    <div class="conteiner">
<div class="b">
     <div class="a">
       <label for="">login</label>
<input type="text" v-model="name">
 </div>
<div class="a">
    <label for="">password</label>
<input type="password" v-model="password">
</div>
</div>
<button @click ='userLogin'>Login</button>
<p>{{ auth.error }}</p>
</div>
</div>
</template>

<style scoped>
.section{
    display: flex;
    align-items: center;
    justify-content: center;
}
.conteiner{
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: aliceblue;
    width: 36%;
    border-radius: 8px;
    padding: 40px;
    font-size: 18px;
    font-weight: 600;
}
.b{
   width:  100%;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   margin-left: 68px;
}
.a{
    display: flex;
    flex-direction: column;
     
     width:  100%;
     
    }

input, button{
    /* max-width: 120 px; */
    margin-bottom: 14px;
    width: 80%;
    border: none;
    height: 40px;
    border-radius: 8px;
    margin-top: 8px;
}
button{
    background-color: var(--main-color);
}
</style>
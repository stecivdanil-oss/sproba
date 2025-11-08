<script setup>
defineProps({
    name: String,    
    count: Number
})
</script>

<template>
<header>
    <div class="conteiner">
        <div class="menu">
            <span>{{name}}</span>
            <nav>
                <router-Link to="/">Home</router-Link>
                <router-Link to="/about">About</router-Link>
                <router-Link to="/attempt">Attempt</router-Link>
                <a href="">товар</a>
                <a href="">відгуки {{ count }}</a>
            </nav>
        </div>
    </div>
    
</header>
</template>

<style scoped>
header{
    background-color: var(--main-color);
    padding: 20px;
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
</style>

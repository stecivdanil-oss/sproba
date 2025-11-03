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
                <a href="">про нас</a>
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
</style>

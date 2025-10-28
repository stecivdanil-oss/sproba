<template>
    <div>
    <button id="btn1"></button>
    <button id="btn2"></button>
    <button id="btn3"></button>
    <button id="btn4"></button>
    </div>
</template>

<style scoped>
button{
    
    border-radius: 100px;
    border-style: none;
    height: 12px;
    width: 8px;
}
div{
    display: flex;
    flex-direction: row;
    gap: 4px;
}
#btn1{
    background-color:#D9D9D9 ;


}
#btn2{
    background-color: red;
}
#btn3{
    background-color: green;
}
#btn4{background-color: yellow;}
</style>
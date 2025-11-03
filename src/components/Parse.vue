<script setup>
import Papa from 'papaparse'
import { ref } from 'vue';
const data = ref([])
const error = ref(null)
function handleFile (e){
const file = e.target.files[0]
if (!file) return 
Papa.parse(file,{
    header:true,
    complete: (result)=>{
        data.value = result.data
        console.log(data.value)
    },
    error:(e)=>{
        error.value= e.message
}


}
) 
}
</script>
<template>
<div>
    <input type="file" @change="handleFile">
     <p v-if = "error" >error</p>
</div>
<table v-if = "data.length>0" border="1">
    <thead>
        <tr>
            <th v-for = '(key,val) in data[0]' style="width: 50px;">{{val }}</th>
        </tr>
    </thead>
</table>
</template>
<style scoped>
div{
    background-color: orange;
    width: 250px;
    height: 70px;
    display: grid;
    place-items: center;
}


</style>
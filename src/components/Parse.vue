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
    <!-- <thead>
        <tr>
            <th v-for = '(key,val) in data[0]' style="width: 50px;">{{val }}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(row,idx) in data">
         
        </tr>
    </tbody> -->
    <thead>
      <tr>
         <th v-for = '(key,val) in data[0]' style="width: 50px;">{{val }}</th>
        <!-- <th v-for="(value, key) in data[0]" :key="key">{{ key }}</th>   -->
      </tr>
    </thead>
    <tbody>
      
      <!-- <tr v-for="(row, idx) in data" :key="idx">  -->
        <tr v-for="(row, idx) in data">
            <td v-for="(key,val) in row">{{ key}}</td>
        </tr>                     
        <!-- <td v-for="(value, key) in row" :key="key">{{ value }}</td>    -->
      <!-- </tr> -->
    </tbody>
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
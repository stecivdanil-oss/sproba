<!-- <script setup>
import { ratigs } from '../Data';

defineProps({
   ratigs:Object

})
let search = ref('')
let filtered_data = computed(()=>{
  return products.filter(el=>el.name.toLowerCase().includes(search.value.toLowerCase()))
});
</script>v-for="el in filtered_data"
<template>
  <label for="ratingFilter">Фільтрувати за рейтингом</label>
<select  id="ratingFilter" v-model="search">
<option value="">всі</option>
<option value="5">5 зірок</option>
<option value="4">4 зірки</option>
<option value="3">3 зірки</option>
<option value="2">2 зірки</option>
<option value="1">1 зірка</option>
</select>
 <div v-for="item in ratigs" :key="item.id">

  <h3>rating:{{item.id }} </h3>
  <p>name:{{ item.name }}</p>
  <p>desciption:{{ item.coment }} </p>
 </div>
</template> -->
<script setup>
import { ref, computed } from 'vue';
import { ratigs } from '../Data'; // Імпортуємо масив

// 1. Створюємо реактивну змінну для зберігання обраного значення фільтра.
// Встановлюємо початкове значення "" (для опції "всі")
const selectedRating = ref(''); 

// 2. Створюємо обчислювану властивість для фільтрації.
// Вона буде автоматично перераховуватися, коли змінюється selectedRating.
const filteredRatigs = computed(() => {
    // Якщо вибрано "всі" (порожній рядок), повертаємо весь масив
    if (selectedRating.value === '') {
        return ratigs;
    }
    
    // Перетворюємо рядок вибраного рейтингу в число для коректного порівняння
    const filterId = parseInt(selectedRating.value); 
    
    // Фільтруємо масив: залишаємо лише ті елементи,
    // ID яких співпадає з обраним значенням
    return ratigs.filter(item => item.id === filterId);
});
const firstThreeItems = computed(() => {
  return ratigs.value.slice(0, 3); // Метод slice(start, end)
});

// import { ref, computed } from 'vue';
// import { ratigs } from '../Data'; 


// const selectedRating = ref(''); 


// const filteredRatigs = computed(() => {
//     // Якщо вибрано "всі", повертаємо весь масив ratigs
//     if (selectedRating.value === '') {
//         return ratigs;
//     }
    
//     // Перетворюємо рядок у число для порівняння
//     const filterId = parseInt(selectedRating.value); 
    
//     // Фільтруємо за рейтингом (id)
//     return ratigs.filter(item => item.id === filterId);
// });


// const firstThreeFilteredItems = computed(() => {
//     // Застосовуємо .slice(0, 3) до результату ФІЛЬТРАЦІЇ
//     return filteredRatigs.value.slice(0, 3);});

</script>

<template>
  <label for="ratingFilter">Фільтрувати за рейтингом</label>
  <select 
    id="ratingFilter" 
    v-model="selectedRating" 
    class="filter-select"
  >
    <option value="">всі</option>
    <option value="5">5 зірок</option>
    <option value="4">4 зірки</option>
    <option value="3">3 зірки</option>
    <option value="2">2 зірки</option>
    <option value="1">1 зірка</option>
  </select>

<div class="comentsConteiner">
    <div v-for="item in filteredRatigs" :key="item.id" class="review-card">
     <h3> {{ item.name }}</h3>
      <p style="margin-bottom: 10px;">Rating: {{ item.rating }} </p>
  
    <p>Comment: {{ item.coment }} </p>
  </div> 
</div>

  <p v-if="filteredRatigs.length === 0">Немає відгуків з цим рейтингом.</p>
</template>
<style scoped>
.comentsConteiner{
  width: 600px;
  overflow-y: scroll;
  height: 300px;
}
*{
  margin: 0 auto;
}
div{
  box-shadow: 5px 5px 15px rgb(197, 238, 224);
  padding: 8px 14px;
  margin: 20px;
width: max-content;
}

</style>
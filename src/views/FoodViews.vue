<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" @click="userPinia.getUser">獲得使用者資訊</button>

    <br/>
    <!-- ref -->
    <div>
      使用者名稱:
      <input v-model="userInfo.name" type="text">
    </div>
    <div>
      愛吃食物:
      <input v-model="food" type="text">
    </div>
    <p>{{ likeFood }}</p>
    <button @click="foodPinia.getLikeFood">愛吃食物</button>
    <button @click="foodPinia.callUser">愛吃食物 Async</button>

    <br/>
  </div>
</template>

<script>
import userStore from '@/Pinia/userStores';
import foodStore from '@/Pinia/foodStores';
import { storeToRefs } from 'pinia';
export default {
  setup(){
    const userPinia = userStore()
    const foodPinia = foodStore()
    const { userInfo } = storeToRefs(userPinia)
    const { food,likeFood } = storeToRefs(foodPinia)
    return{
      userPinia,
      foodPinia,
      userInfo,
      likeFood,
      food
    }
  }
}
</script>
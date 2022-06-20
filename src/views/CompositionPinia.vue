<template>
  <div class="about">
    <p>名子是{{ userInfo.name}}</p>
    <button type="button" @click="getUser">獲得使用者資訊</button>
    <button type="button" @click="patch">修改 Store 資料 Patch</button>
    <button type="button" @click="state">修改 Store 資料 State</button>
    <button type="button" @click="reset">還原 Store 資料 reset</button>

      <br/>
    <!-- ref -->
    <input v-model="userInfo.name" type="text">
      <br/>
    <input v-model="str" type="text">

    <br/>
    <!-- reactive -->
    <input v-model="userPinia.userInfo.name" type="text">
    <br/>
    <!-- <p>布林值</p> : <span> {{ boolean }}</span> -->
  </div>
</template>

<script>
import userStore from '@/Pinia/userStores';
import { storeToRefs } from 'pinia';
export default {
  setup(){
    // reactive
    const userPinia = userStore()
    const { getUser } = userStore()

    // ref
    const { userInfo, num , str } = storeToRefs(userPinia)
    
    // Composition Pinia 特有方法
    // $patch() 一次更新較大量 store 資料時使用，使用時若新增原本沒有 key 值，無法出現
    function patch(){
      userPinia.$patch({
        userInfo: {
          name:'Ryder2'
        },
        str:"可以瑟瑟",
        // boolean:true,
      })
    }
    // $state 也可直接更新，和 $patch() 方法差不多
    function state(){
      userPinia.$state = {
        userInfo: {
          name:'Ryder3'
        },
        str:"不能色色",
      }
    }
    // reset()
    function reset(){
      userPinia.$reset()
    }
    return{
      userPinia,
      userInfo,
      num,
      str,
      patch,
      state,
      reset,
      getUser
    }
  }
}
</script>
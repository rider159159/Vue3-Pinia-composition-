<template>
  <input v-model="userPinia.userInfo.name" type="text">
    <br>
  <input v-model="userInfo.name" type="text">
    <br>
  {{ str }}
    <br>
  <button @click="getUser">獲得使用者資訊</button>

</template>

<script>
import userStore from '@/Pinia/userStores';
import { storeToRefs } from 'pinia';

export default {
  setup(){
		const userPinia = userStore()
    const { getUser } = userStore()
		const { userInfo, str } = storeToRefs(userPinia)
		// console.log(str.value = 'Hello World')
		return {
        userPinia,
        userInfo,
        str,
        getUser
			}
		}
	}
</script>
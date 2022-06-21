<template>
	<button type="button" @click="patch">修改 Store 資料 Patch</button>
  <button type="button" @click="reset">reset</button>

	<input v-model="userPinia.userInfo.name" type="text">

</template>

<script>
import userStore from '@/Pinia/userStores';
export default {
  setup(){
		const userPinia = userStore()

		function patch(){
      userPinia.$patch({
        userInfo: {
          name:'Tao'
        },
        num: 8787,
        str:"高歌離席",
        boolean:true,
      })
    }

    function reset(){
      userPinia.$reset()
    }
		return{ userPinia, patch,reset }
	}
}
</script>
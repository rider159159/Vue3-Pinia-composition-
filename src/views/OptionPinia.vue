<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>名子是{{ userInfo.name}}</p>
    <button type="button" @click="getUser">獲得使用者資訊</button>
    <button @click="test">test</button>
  </div>
</template>

<script>
import {  mapState, mapActions } from 'pinia';
import userStore from '@/Pinia/userStores';
// const userPinia = userStore()

export default {
  data(){
    return{

    }
  },

  methods: {
    ...mapActions(userStore,['getUser']),
    test(){
    },
  },
  computed: {
    ...mapState(userStore, ['userInfo']),
  },
  mounted() {
    console.log(this)
  }
}

</script>
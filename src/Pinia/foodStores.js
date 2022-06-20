import { defineStore } from 'pinia';
import userStore from './userStores'

export default defineStore('foodStore', {
  // state 必須是函式，定且在 return ，類似 Vue2 的 data() 設定
  state(){
    return { 
      food:"嘴邊肉",
      likeFood:'',
    }
  },
  //actions
  actions:{
    getLikeFood(){
      const user = userStore()
      this.likeFood = `${user.userInfo.name}愛吃${this.food}`
    },
    async callUser() {
      const user = userStore()
      await user.getUser()
      await this.getLikeFood()
    },
  },
  // Computed
  getters:{}
})
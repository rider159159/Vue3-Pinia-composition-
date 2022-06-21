import { defineStore } from 'pinia';
import axios from 'axios';


export default defineStore('userStore', {
  // state 必須是函式，定且在 return ，類似 Vue2 的 data() 設定
  state(){
    return {  // 單獨的值，不被影響
      userInfo: {
        age:87
      },
      num: 0,
      str:""
    }
  },
  //actions
  actions:{
    async getUser() {
      const url = `http://localhost:3034/user/userInfo`;
      await axios.get(url).then((response) => {
        this.userInfo = response.data.user
      });
    },
    test(){
      this.str ='test'
    }
  },
  // Computed
  getters:{}
})
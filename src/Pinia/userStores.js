import { defineStore } from 'pinia';
import axios from 'axios';


export default defineStore('userStore', {
  // state 必須是函式，定且在 return ，類似 Vue2 的 data() 設定
  state(){
    return { 
      userInfo: {},
      num: 0,
      str:"test"
    }
  },
  //actions
  actions:{
    async getUser() {
      const url = `http://localhost:3034/user/userInfo`;
      await axios.get(url).then((response) => {
        this.userInfo = response.data.user
        console.log('取得產品列表:', response);
      });
    },
  },
  // Computed
  getters:{}
})
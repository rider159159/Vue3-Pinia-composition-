import { defineStore } from 'pinia';
import axios from 'axios';
import {
  getToken,
} from '@/assets/JS/Cookie';

export default defineStore('tokenStore', {
  state(){
    return { 
      lock:false,
    }
  },
  //actions
  actions:{
    checkToken() {
      const url = `http://localhost:3034/token/checkToken`;
      const token = getToken()
      axios({
        method: 'get',
        url: url,
        headers: {
          "Ryder-cookie": token
        },
      }).then((response) => {
        this.lock = response.data.check
      });
    },
  },
  // Computed
  getters:{}
})
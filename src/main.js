import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import { getToken } from '@/assets/JS/Cookie';
import tokenStores from '@/Pinia/tokenStores';

const pinia = createPinia();
const app =  createApp(App)
app.use(pinia)
app.use(router)
// app.use(VueAxios, axios);

app.mount('#app')



//to, from, next
router.beforeEach((to,form,next) => {
  const tokenPinia = tokenStores()
  console.log(tokenPinia)
  if(to.meta.requiresAuth){
    const url = `http://localhost:3034/token/checkToken`;
    const token = getToken()
    axios({
      method: 'get',
      url: url,
      headers: {
        "Ryder-cookie": token
      },
    }).then((response) => {
      const val =  response.data.check
      // 有 cookie 回傳通過
      if(val){
        tokenPinia.lock = true
        next()
      }else{
        // 無 cookie ，回傳失敗，退回首頁
        tokenPinia.lock = false
        alert('重新登入')
        router.push({
          name: 'home',
        })
      }
    });
  }else{
    next()
  }
})

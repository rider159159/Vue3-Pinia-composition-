<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/optionPinia">Option</router-link>|
    <router-link to="/compositionPinia">Composition</router-link>|
    <router-link to="/test">test</router-link>|
    <router-link to="/admin">admin</router-link>|

  </nav>
  <button @click="addCookie">新增 cookie</button>
  <br>
  <p>userName: {{ userPinia.userInfo.name }}</p>
  <router-view/>
</template>

<script>
import tokenStores from '@/Pinia/tokenStores';
import { setToken } from '@/assets/JS/Cookie';
import userStore from '@/Pinia/userStores';

export default {
  setup(){
		const userPinia = userStore()
    const tokenPinia = tokenStores()
    function addCookie(){
      setToken('test')
    }
    return{
      tokenPinia,
      addCookie,
      userPinia,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

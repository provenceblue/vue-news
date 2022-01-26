<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
export default {
  components: {
    'tool-bar': Toolbar,
  }
}
</script>

<style>
body{padding:0;margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {text-decoration: none;color:#34495e;}
a.router-link-exact-active{text-decoration:underline;}
a:hover{color:#42b883;text-decoration:underline;}
</style>

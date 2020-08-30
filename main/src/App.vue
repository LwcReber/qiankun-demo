<template>
  <div id="main">
    <Header class="header-container"></Header>
    <div id="subapp"></div>
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header'
import mixin from './appMixin'
export default {
  mixins: [mixin],
  components: { Header }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#subapp {
  padding-top: 40px;
}
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #2c3e50;
  height: 40px;
  color: #fff;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

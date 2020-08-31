<template>
  <div id="main">
    <test key="main" class="test"></test>
    <Header class="header-container"></Header>
    <div id="subapp"></div>
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header'
import mixin from './appMixin'
import test from '@/components/test'
export default {
  mixins: [mixin],
  components: { Header, test }
}
</script>
<style lang="stylus" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.test {
  position: fixed;
  right: 0;
  bottom: 60px
  width 200px
  text-align right
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

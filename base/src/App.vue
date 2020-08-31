<template>
  <div :id="root">
    <h1>base 应用</h1>
    <test class="base-test">在子应用上使用到主应用组件</test>
    <button @click="handleClick">点击调用主应用的函数</button>
    <div>应用间的共享数据{{mainLang}}</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      root: process.env.VUE_APP_NAME
    }
  },
  computed: {
    mainLang () {
      return this.$store.state.lang
    }
  },
  methods: {
    handleClick () {
      this.$mainUtils.testMain()
    }
  }
}
</script>
<style lang="stylus" scoped>
#base {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.base-test {
  position fixed
  left: 0
  bottom: 60px
  width 200px
  text-align left
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

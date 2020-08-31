<template>
  <ul class="list">
    <li>主应用导航栏</li>
    <li>
      <a href="/base">base应用</a>
    </li>
    <li>
      <a href="/app2">app2</a>
    </li>
    <li class="click" @click="click">点击改变共享数据</li>
  </ul>
</template>

<script>
export default {
  methods: {
    click () {
      const lang = Math.random() * 1000
      this.$setGlobalState({ lang })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    display flex
    align-items center
    color #fff
    margin 0
    padding 0 60px
    li
      width 130px
  a
   color #fff

  li.click
    cursor pointer
    width 200px
</style>

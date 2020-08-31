import { initGlobalState } from 'qiankun'
import Vue from 'vue'
import store from '@/store'
const state = {
  lang: 'zh'
}

store.commit('updateLang', state.lang)

const { onGlobalStateChange, setGlobalState } = initGlobalState(state)
// 监听到变化更新到对应vuex
onGlobalStateChange((value, prev) => {
  // 更新vuex的store
  store.commit('updateLang', value.lang)
})

// 绑定到vue中，在组件中，设置全局变量改变
Vue.prototype.$setGlobalState = setGlobalState

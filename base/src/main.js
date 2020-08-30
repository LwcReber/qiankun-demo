import './public-path' // 子应用必须引入的文件

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
const APPNAME = process.env.VUE_APP_NAME
Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#base')

// 子应用配置
let router = null
let instance = null

function render (props = {}) {
  const {
    container
  } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/' + APPNAME : '/',
    mode: 'history',
    routes
  })
  console.log(router)

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#' + APPNAME) : '#' + APPNAME)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

function storeTest (props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    )
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name
      }
    })
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)
  storeTest(props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

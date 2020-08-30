import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  baseApp,
  apps
} from '@/router/router.config'
const allApps = []
const childRoute = ['/' + baseApp.name]

apps.map((app) => {
  const path = '/' + app.name
  childRoute.push(path)
  allApps.push({
    path,
    name: path
  })
})
Vue.use(VueRouter)

const routes = [
  // 默认进入的应用
  { path: '/', redirect: '/' + baseApp.name },
  { path: '/' + baseApp.name },
  ...allApps,
  // 主应用的页面
  {
    path: '/mtest',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404', component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

console.log(routes)

const router = new VueRouter({
  mode: 'history',
  routes
})
const isChildRoute = path => childRoute.some(item => path.startsWith(item))
const rawAppendChild = HTMLHeadElement.prototype.appendChild
const rawAddEventListener = window.addEventListener
const allRoutes = []
routes.map((route) => {
  if (route.path === '/') return
  allRoutes.push(route.path)
})

const handle404 = (path) => {
  for (let index = 0; index < allRoutes.length; index++) {
    const route = allRoutes[index]
    if (path.startsWith(route)) {
      return true
    }
  }
  return false
}

router.beforeEach((to, from, next) => {
  // 从子项目跳转到主项目 主页面css未加载问题
  // https://github.com/umijs/qiankun/issues/578
  if (isChildRoute(from.path) && !isChildRoute(to.path)) {
    HTMLHeadElement.prototype.appendChild = rawAppendChild
    window.addEventListener = rawAddEventListener
  }
  // 404处理
  if (handle404(to.path)) {
    next()
  } else {
    next('/404')
  }
})
export default router

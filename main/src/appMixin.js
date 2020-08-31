import {
  registerMicroApps,
  start
} from 'qiankun'
import './coreStore'
import propsData from './propsData'
import {
  baseApp,
  apps
} from '@/router/router.config'
const allApps = [baseApp, ...apps]
console.log(baseApp)
allApps.map((app) => {
  // 往所有的应用中注入公共props
  app.props = {
    ...propsData,
    ...app.props // 保留应用自身的props
  }
})
export default {
  created () {
    this.valiToken().then(() => {
      // token校验通过后，开始注册子应用
      this.qiankunInit()
    })
  },
  methods: {
    // token校验
    valiToken () {
      return new Promise((resolve, reject) => {
        resolve()
      })
    },
    // 初始化，注册应用
    qiankunInit () {
      registerMicroApps(allApps)
      start()
    }
  }
}

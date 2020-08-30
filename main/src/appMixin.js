import {
  registerMicroApps,
  start
} from 'qiankun'
import {
  baseApp,
  apps
} from '@/router/router.config'
const allApps = [baseApp, ...apps]
console.log(baseApp)

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

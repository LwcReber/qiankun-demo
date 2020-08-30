const activeRule = (path) => {
  return location => location.pathname.startsWith(path)
}

const baseApp = {
  name: 'base',
  entry: '//localhost:8082',
  container: '#subapp',
  activeRule: activeRule('/base') // 不能按照官网的demo直接使用字符串active的方式，如果当前路由带参数的话，参数前面没有/，就无法激活当前应用
}
const apps = [
  {
    name: 'app2',
    entry: '//localhost:8086',
    container: '#subapp',
    activeRule: activeRule('/app2')
  }
]
module.exports = {
  baseApp,
  apps
}

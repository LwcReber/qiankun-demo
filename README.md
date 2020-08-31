# qiankun-demo
公司内部应用使用微前端已经成功上线，经过了调研，踩坑，总结出来的经验

## 说明
因为是demo项目，所以所有项目都放在了一个仓库中，实际开发中需要把主应用，子应用各自创建仓库，按照应用自身都开发进度进行分支管理会比较好，demo全部使用vue，对于其他的框架也是一样的

### 各应用说明
使用qiankun开发的时候，只要配置好以后，主应用与子应用可以各自独立进行开发，只是需要注意布局的问题

#### 注册应用

主应用在 `main/src/router/router.config.js` 中进行子应用的注册，子应用配置直接按照官方的文档写即可

 应用说明

子应用在环境变量中声明VUE_APP_NAME应用名称，不要使用app来作为根id

如果主应用和子应有公用一个后端的接口地址，那么不需要在axios中不需要配置
全路径的请求地址，否则需要配置axios baseUrl为接口地址

#### 组件通讯
部分借鉴了
`https://github.com/wl-ui/wl-mfe`的一些通讯方式

`main/src/coreStore.js` 各应用的数据通讯存放地方

`main/src/propsData.js` 主应用传递给子应用的共享数据，公共组件，公共函数，（注意组件如果是有国际化的，子组件也要有国际化的配置）

考虑到样式隔离问题，组件在子应用上使用时，如果添加新的class，最好是带有一个应用的前缀，避免样式覆盖

公用组件问题 `$attrs is readonly.found in` 因为一个window中有2个vue导致



#### nginx配置 （主要是解决跨域以及缓存的问题，其他配置按照原本项目的配置即可）

主应用
  ```
  add_header Cache-Control no-cache;
  ```
子应用
  ```
  add_header Access-Control-Allow-Origin *;
  add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
  add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
  add_header Cache-Control no-cache;
  ```

#### 404页面的处理
  所有的应用都在主应用的路由中进行注册，主应用检测路由不在表中时，跳404页面。子应用如果需要也要自定义404页面，不过可以保留原有的 * 方式
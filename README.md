# 有场APP微信小程序开发文档

> A learning project.

### 1.	开发环境及依赖

​	（0）`vanilla JS`*

​	（1）`mpvue`：基于vue，语法同Vue.js基本一致

​	（2）`Vant-weapp`：官方文档见https://youzan.github.io/vant-weapp/#/home

​	（3）`flyio`：已封装request，详见`/utils/request.js`

​	（4）微信开发者工具：调试工具

### 2.	运行项目

​	（1）`npm install`

​	（2）`npm run dev:wx`

### 3.	引入`Vant Weapp`组件

​	（1）在`app.json`中的`"usingComponents"`对象下添加所需组件名称，详见官方文档（需注意引入路径与官方文档不同）

```json
"usingComponents":{
    "van-button": "/vant-weapp/dist/button/index"
  },
```

​	（2）将`/node_modules`下的`vant-weapp`文件夹复制到`/dist/wx`文件夹下（否则将无法运行）

### 4.	打包构建

​	（1）`npm build:wx`

...

后续待补充


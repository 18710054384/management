# manage

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
![Image text](dsp.png)

# 智能业务投放系统总结
## 1.整体技术选型（包括脚手架和框架 ES6 Less等）

    Vue2.0+vue-cli+Vuex+Axios+NodeJs+Express+es6
    考虑到团队中的成员对各个框架的熟练程度，还有vue简单易上手;
    es6:let可以声明块级变量
         箭头函数，箭头函数与包围它的代码共享同一个this
         import模块，除了基本语法外，开发者还可以在一个模块中多次export以及import整个模块作为一个特定的命名空间
         优化了“尾调用（Tail Calls）”：一直到ES5，函数递归调用过多会导致栈溢出（到达内存上限），这是因为函数每次调用自己时都会调用一个新版本。但优化之后，每次调用会同上次调用共享同一个上下文，保证了内存使用率的稳定。


## 2.路由搭建，路由拦截的实现，权限接口设置

    (1):引入vue中的vue-router来搭建路由;
    (2):利用vue的导航守卫来做路由拦截;
        判断本地存储有没有token字段，有token字段就进入首页，没有就去登录页面进行登录;
        登录成功给本地浏览器存储token字;
    (3):针对登录时传给后端的信息返回相应的字段

## 3.数据请求以及如何封装全局请求接口

    (1):利用axios请求数据
    (2):封装axios
        使用自定义配置创建一个新的axios实例
        指定将应用于每个请求的配置默认值,自定义实例的默认值，（axios.defaults.baseUrl='http://localhost:9000'）
        请求拦截器，响应拦截器

## 4.项目中的核心功能和难点功能介绍
    ...
## 5.数据管理(store 是如何管理和维护数据的)
    ...
## 6.遇到的困难以及解决方式(自定义组件)
    ...

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

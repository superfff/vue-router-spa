# vue2.*  (router)

 @[vue2.3.3|webpack2.6.1|vue-router2.3.1|less|axios]

>- 以前看过有相关朋友share了空的多页面脚手架. 不过down了几个都是webpack1.0或者vue1.0的.
>- 刚好项目需要用到vue. 就在vue-cli的基础上进行了修改
>- 已经有babel直接用es6即可,如果需要修改配置的请到 .babelrc里面修改

### 命令
>国际惯例

- **npm install (or cnpm 其他)** 装依赖包
- **npm run dev** 起服务
- **npm run build** 打上线包

---

###目录结构
1. build/config: 一系列配置文件
2. src: 页面文件
3. (src)assets: 
- js公用的方法/配置方法
- less公用的样式和reset.css
4. (src)components: 复用的组件
5. (src)pages: **相关的页面** 
- *.vue(具体页面)
- **在static文件夹中的tpl.vue 直接复制就ok**
6. router: 路由配置
7. app.vue 入口vue文件
8. main.js 入口js文件

---

###其他
- 在assets/conf.js中配置了axios请求拦截.已经全局引入axios(使用this.$axios进行请求)
有需要的话.具体的配置请到conf.js中进行增加
- 在main.js中配置了路由跳转拦截.有需要的可以在其中配合路由文件进行拦截设置
- 端口号在config/index.js中修改;
- 还有另外一个开发过程中需要挂代理:
请到config文件夹中的 index.js中 proxyTable进行修改
具体请参考此 [github链接](https://github.com/chimurai/http-proxy-middleware)
``` javascript
/*
param:
*:   表示挂代理时,识别的请求前缀
url: 表示代理的地址
*/
'/*': {
	target: 'url',
	changeOrigin: true,
	pathRewrite: {
		'^/*': '/*'
	}
}
```
- 本人也还正在学习中,其中有部分vue-cli生成的语句暂时还不太明白,希望能帮到有需要的或者不给大家挖坑.互相学习
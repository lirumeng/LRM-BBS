# front

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### UI 框架

Layui

[CND 引入样式](https://www.layuicdn.com/)

### 后端图形验证码服务 svg-captcha

[svg-captcha 中文文档](https://github.com/produck/svg-captcha/blob/HEAD/README_CN.md)

### 表单验证 Vee-validate@3.x

[文档](https://github.com/logaretm/vee-validate)

### 邮件服务 NodeMailer

[node-mailer](https://www.npmjs.com/package/node-mailer)

devServer 处理开发过程中的跨域问题

在 vue.config.js 里添加配置

```
module.exports = {
    devServer: {
        proxy: 'http://localhost:3000'
    }
}
```

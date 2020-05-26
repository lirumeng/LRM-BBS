<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text"
                   name=""
                   placeholder="请输入用户名"
                   autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password"
                   name=""
                   placeholder="请输入密码"
                   autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text"
                   name=""
                   placeholder="请输入验证码"
                   autocomplete="off"
                   class="layui-input">
          </div>
          <div class="layui-form-mid"
               v-html="svg">图片</div>
        </div>
        <button type="button"
                class="layui-btn">点击登录</button>
        <a class="forget-password-link"
           href="http://www.layui.com">忘记密码</a>
      </form>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        svg: ''
      }
    },
    mounted() {
      axios.get('http://localhost:3000/getCaptcha').then(res => {
        console.log(res)
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    background: #e8e8e8;
  }
  .layui-container {
    background: #ffffff;
  }

  input {
    width: 190px;
  }
  .forget-password-link {
    margin-left: 20px;
    &:hover {
      color: #009688;
    }
  }
</style>

<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <validation-provider rules="required|email"
                               v-slot="{errors}">
            <div class="layui-input-inline">
              <input type="text"
                     name="username"
                     placeholder="请输入用户名"
                     autocomplete="off"
                     class="layui-input"
                     v-model="username">
            </div>
            <div class="error layui-form-mid">{{errors[0]}}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <validation-provider rules="required|password"
                               v-slot="{errors}">
            <div class="layui-input-inline">
              <input type="password"
                     name="password"
                     placeholder="请输入密码"
                     autocomplete="off"
                     class="layui-input"
                     v-model="password">
            </div>
            <div class="error layui-form-mid">{{errors[0]}}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <validation-provider rules="required|code"
                               v-slot="{errors}">
            <div class="layui-input-inline">

              <input type="text"
                     name="code"
                     placeholder="请输入验证码"
                     autocomplete="off"
                     class="layui-input"
                     v-model="code">
            </div>
            <div class="error layui-form-mid">{{errors[0]}}</div>
          </validation-provider>
          <div class="layui-form-mid svg"
               v-html="svg"
               @click="getCaptcha()">图片</div>

        </div>
        <button type="button"
                class="layui-btn"
                @click="checkForm()">点击登录</button>
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
        svg: '',
        username: '',
        password: '',
        code: '',
        errorMsg: []
      }
    },
    mounted() {
      this.getCaptcha()
    },
    methods: {
      getCaptcha() {
        axios.get('http://localhost:3000/getCaptcha').then((res) => {
          if (res.status === 200) {
            const obj = res.data
            if (obj.code === 200) {
              this.svg = obj.data
            }
          }
        })
      },
      checkForm() {
        this.errorMsg = []
        if (!this.username) {
          this.errorMsg.push('用户名不能为空')
        }
        if (!this.password) {
          this.errorMsg.push('密码不能为空')
        }
        if (!this.code) {
          this.errorMsg.push('验证码不能为空')
        }
      }
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

  .svg {
    padding: 0 !important;
    line-height: 0;
  }

  .error {
    color: red;
  }

  // .form-group--error {
  //   .error {
  //     display: block;
  //   }
  // }
</style>

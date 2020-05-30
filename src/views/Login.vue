<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user"
         pad20>
      <div class="layui-tab layui-tab-brief"
           lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">
            <router-link :to="{name:'login'}">登录</router-link>
          </li>
          <li>
            <router-link :to="{name:'register'}">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content"
             id="LAY_ucm"
             style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email"
                         class="layui-form-label">用户名</label>
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
                  <label for="L_pass"
                         class="layui-form-label">密码</label>
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
                  <label for="L_vercode"
                         class="layui-form-label">验证码</label>
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
                    <div class="layui-form-mid svg"
                         v-html="svg"
                         @click="_getCode()"></div>
                    <div class="error layui-form-mid">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即登录</button>
                  <span style="padding-left:20px;">
                    <router-link :to="{name:'forget'}">忘记密码？</router-link>
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登录</span>
                  <a href=""
                     onclick="layer.msg('正在通过QQ登录', {icon:16, shade: 0.1, time:0})"
                     class="iconfont icon-qq"
                     title="QQ登录"></a>
                  <a href=""
                     onclick="layer.msg('正在通过微博登录', {icon:16, shade: 0.1, time:0})"
                     class="iconfont icon-weibo"
                     title="微博登录"></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCode } from '@/api/login'

  export default {
    name: 'Login',
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
      this._getCode()
    },
    methods: {
      _getCode() {
        getCode().then((res) => {
          if (res.code === 200) {
            this.svg = res.data
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
  .svg {
    padding: 0 !important;
    line-height: 0;
  }
  .error {
    color: red;
  }
</style>
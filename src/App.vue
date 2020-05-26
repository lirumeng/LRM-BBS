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
          <div class="layui-input-block">
            <input type="text"
                   name=""
                   placeholder="请输入验证码"
                   autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <button type="button"
                class="layui-btn">点击登录</button>
        <a class="forget-password-link"
           href="http://www.layui.com">忘记密码</a>
      </form>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  #app {
    background: #e8e8e8;
  }
  .layui-container {
    background: #ffffff;
  }

  input {
    width: 240px;
  }
  .forget-password-link {
    margin-left: 20px;
    &:hover {
      color: #009688;
    }
  }
</style>

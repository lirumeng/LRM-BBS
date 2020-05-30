<template>
  <div id="app">
    <bbc-header></bbc-header>
    <router-view></router-view>
    <bbc-footer></bbc-footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      'bbc-header': Header,
      'bbc-footer': Footer
    }
  }
</script>

<style lang="scss">
  @import 'assets/layui/css/layui.css';
  @import 'assets/css/global.css';
  @import 'assets/layui/css/modules/layer/default/layer.css';
</style>

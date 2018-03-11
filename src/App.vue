<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/nav.vue'

export default {
  name: 'App',
  components: { Nav }
}
</script>

<style lang="less" rel="stylesheet/less">
@import './style/style.less';
</style>

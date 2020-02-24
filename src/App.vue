<template>
  <div id="app">
    <!-- 把Detail组件排除那么每次的数据就是新的了 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar,

    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    position: relative;
  }
</style>


<template>
<!-- 封装导航栏组件 -->
  <div id="nav-bar">
    <!-- 用div包裹起来 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="conter"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'NavBar'
  }
</script>

<style scoped>
  #nav-bar{
    display: flex;
    z-index: 99;
    position: relative;
    /*文字上下居中 */
    height: 44px;
    /* 设置height时line-height才能显示 */
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1)
  }
  .left, .right{
    width: 60px;
    /* background: red; */
  }
  .conter{
    flex: 1;
    /* background: yellow; */
  }
</style>

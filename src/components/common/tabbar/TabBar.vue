<template>
   <div class="tab-bar">
     <!-- 当在组件中引用的时候TabBarItem能够插入里边 -->
      <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped>
  .tab-bar{
    display: flex;
    /* 固定到下边 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:9;
    background-color: #ffffff
  }
  .tab-bar-item{
    /* 均等分 */
    flex: 1;
    text-align: center;
    height: 49px;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1)
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
</style>

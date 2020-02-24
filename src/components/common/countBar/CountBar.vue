<template>
  <div id="count-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #count-bar
    display flex
    background-color #fff
    justify-content space-around
    align-items center
    .left, .right
      width 80px

</style>

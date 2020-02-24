<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item"
        v-for="(category, index) in categoryList" :key="index"
        :class="{active:index === currentIndex}" @click="indexClick(index)">
        {{category.title}}
      </div>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
import Scroll from 'common/scroll/Scroll'
  export default {
    components: {
      Scroll
    },
    props:{
      categoryList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {
        currentIndex:0
      }
    },
    methods: {
      indexClick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tab-menu
    background-color #f6f6f6
    height 100%
    // 左边导航的宽度
    width 100px
    box-sizing border-box
    .menu-list-item
      height 45px
      line-height 45px
      text-align center
      font-size 16px
    .active
      font-weight 700
      // 激活的背景颜色
      background-color #fff
      color var(--color-high-text)
      border-left 3px solid var(--color-high-text)
</style>

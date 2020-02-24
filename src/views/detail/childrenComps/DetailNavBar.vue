<template>
<!-- 封装顶部导航栏组件 -->
  <div>
    <nav-bar>
        <!-- 左图标 -->
        <div slot="left" class="back">
          <img src="~assets/img/common/back.svg" @click="backClick" alt="">
        </div>
        <div slot="center" class="detail-nav">
          <!-- 内容 -->
            <div v-for="(item, index) in titles"
            :key="index" class="detail-item" :class="{active:index === currentIndex}"
             @click="detailClick(index)">{{item}}</div>
        </div>
    </nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'common/navBar/NavBar'
  export default {
    name:"DetailNavBar",
    components:{
      NavBar
    },
    data () {
      return {
        titles:['商品', '参数', '评价', '推荐'],
        currentIndex:0
      }
    },
    methods: {
      detailClick(index){
        this.currentIndex = index
        //内部把点击的事件传递出去到Detail组件，在Detail组件来点击滚动到相应的内容,并且获取到相应的offsetTop
        this.$emit('titleClick', index)
      },
      backClick(){
        // 点击返回箭头
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail-nav
    display flex
    font-size 13px
  .back>img
    margin-top 12px
    padding-left 10px
  .detail-item
    flex 1
  .active
    color var(--color-high-text)
</style>


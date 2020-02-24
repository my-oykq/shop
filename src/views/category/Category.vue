<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :category-list="categoryList"></tab-menu>
      <tab-right-bar></tab-right-bar>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TabMenu from './childComps/tabMenu/TabMenu'
import TabRightBar from './childComps/tabrightBar/TabRightBar'

import NavBar from 'components/common/navBar/NavBar'
// import Scroll from 'common/scroll/Scroll'

import { getCategory,getSubcategory } from 'network/category'
  export default {
    name:"Category",
    components:{
      NavBar,
      TabMenu,
      TabRightBar,
      // Scroll
    },
    data () {
      return {
        categoryList:[]
      }
    },
    created () {
      // 左边数据
      this._getCategory()
      // 右边数据
      this._getSubcategory(0)
    },
    methods: {
      // 左边数据
      _getCategory(){
          getCategory().then((res) =>{
          // console.log(res)
          const data = res.data.data
          this.categoryList = data.category.list
          // console.log(this.categoryList)
        })
      },
      // 右边数据
      _getSubcategory(maitKey){
        getSubcategory(maitKey).then((res) =>{
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #category
    height 100vh
    .nav-bar
      background-color: var(--color-tint);
      font-weight: 700;
      color: #fff
    .content
      position absolute
      left 0
      right 0
      top 44px
      bottom 49px
      display flex
</style>

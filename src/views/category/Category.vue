<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <!-- 左边导航栏 -->
      <tab-menu :slide-bar-list="categoryList" @itemClick="itemClick"/>
      <scroll class="scroll-height" ref="scroll" @scroll="scroll">
        <!-- 推荐导航---流行，新品，精选 ,ref拿到tab-control组件中的currentIndex，最为标记拿到组件对象的信息-->
        <tab-control :titles="titleList" @tabClick="tabClick" ref="tabControl"/>
         <!-- 右边top部分 ,参数--当前点击的index-->
        <sub-bar :category-list="subcategoryList[currentIndex]"></sub-bar>
        <!-- 右侧bottom商品展示部分 -->
        <goods-list :goods="categoryDetailList"/>
        <base-line/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowTop"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TabMenu from './childComps/tabMenu/TabMenu'
import SubBar from './childComps/subBar/SubBar'

import TabControl from 'components/content/tabControl/TabControl'
import NavBar from 'components/common/navBar/NavBar'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'common/scroll/Scroll'
import BaseLine from 'common/baseline/BaseLine'
import BackTop from 'components/content/backTop/BackTop'

import {
  getCategory,
  getSubcategory,
  getcategoryDeta
} from 'network/category'

  export default {
    name:"Category",
    components:{
      NavBar,
      TabMenu,
      SubBar,
      TabControl,
      Scroll,
      GoodsList,
      BackTop,
      BaseLine
    },
    data () {
      return {
        titleList:['流行', '新款', '精选'],
        categoryList:[],//左边数据
        // 右侧分类数据
        subcategoryList:[],
        categoryDetailList:[],
        currentIndex:0,
        isShowTop:false,
        keyList:[]
      }
    },
    created () {
      // 左边数据(1)
      this._getCategory()

    },
    watch: {
      categoryList(key){
        this.$nextTick(()=>{
            // 1-1.读取参数协助右侧top请求对应的数据
            this._getSubcategory(this.categoryList[0].maitKey,0)
          })
      }
    },
    methods: {

        // 左边数据
        _getCategory(){
          // （2）
            getCategory().then((res) =>{
            // console.log(res)
            const data = res.data.data
            // 存储左侧主题栏数据
            this.categoryList = data.category.list
            //vue数据并不是实时更新dom，dom是异步回调，使用nextTick是获取到更新后的值
            // dom渲染之后读取数据
          //渲染数据后读取左侧数据
          this.$nextTick(() => {
            // 读取参数协助右侧top请求对应的数据
            this._getSubcategory(this.categoryList[0].maitKey, 0);
            this._getcategoryDeta(this.categoryList[0].miniWallkey,'pop')
            // 初始化push第一个key进去
            this.keyList.push(this.categoryList[0].maitKey)
          });
          })
        },
        //请求左侧对应的右侧top请求数据(3)
      _getSubcategory(key, index) {
        getSubcategory(key).then(res => {
          // console.log(this.subcategoryList);
          const data = res.data.data
          this.subcategoryList[index] = data.list;
          //请求到数据，隐藏loading
          // this.isShowLoading = false;
        });
      },
        _getcategoryDeta(miniWallkey,type){
          // 请求左侧对应的右侧中间数据展示(4)
          getcategoryDeta(miniWallkey,type).then(res =>{
            // 4-1请求到的数据保存
            this.categoryDetailList = res.data
          })
        },
      // 事件--------------------
      // 监听右侧tab-control点击切换商品(5)
      tabClick(index){
        const typeList = ['pop', 'new', 'sell']
        this._getcategoryDeta(this.categoryList[this.currentIndex].miniWallkey,typeList[index])
      },
      // 事件,监听左侧点击(6),结构赋值，拿到tab-menu商品信息obj
      itemClick({ maitKey, index }){
        // 6-1,根据index动态切换右侧top动态效果
        this.currentIndex = index
        // 6-2,每次切换分类初始化tab-control的下标
        this.$refs.tabControl.currentIndex = 0
        // 6-3请求对应的推荐商品列表-调用右侧请求到的数据，根据左侧的categoryList的currentIndex拿到商品的miniWallkey，type='pop'
        this._getcategoryDeta(this.categoryList[this.currentIndex].miniWallkey,'pop')
      },
      // 6-4点击小箭头
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      //6-5 给scroll绑定监听位置
      scroll(position){
        // 6-5-1，滚动到大于 1000就显示小箭头
        this.isShowTop = -(position.y) >1000
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
      .scroll-height
        position fixed
        top 44px
        right 0
        bottom 50px
        left 100px
        overflow hidden
</style>

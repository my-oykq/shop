<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
                            <!-- 改变style -->
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
	export default {
    name: "TabBarItem",
    // 从MainTabBar传过来的link，根据link来操作icon图标的激活
    props: {
			link: {
				type: String,
        required: true
      }
    },
    computed: {
			isActive() {
        //  == -1 说明没找到
        // 颜色激活，$route.path的路径等于点击的路径相等就出现颜色，indexOf !==-1说明相等，激活颜色
				return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        // 点击激活文字颜色，根据isActive来判断点击字体的颜色。
				return this.isActive ? {'color':'red'}:{}
      }
    },
    methods: {
      // 点击路由进行跳转
			itemClick() {
        // 根据传过来的link点击路由跳转
				this.$router.replace(this.link)
      }
    }
	}
</script>

<style scoped>
  #tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1)
  }

  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>

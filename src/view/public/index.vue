<template>
  <div class="wrapper">
    <!-- <nav class="navbar">
      <a href="/" class="logo">
        <a data-pswp-width='512' data-pswp-height='512' target='_blank' href="https://tools.mytool.zone/logo.png"><img src="https://tools.mytool.zone/logo.png" alt="ToolsDar logo" /></a>
        <span class="title">ToolsDar</span>
      </a>
      <ul class="menu">
        <li><a href="#">首页</a></li>
        <li><a href="#">工具分类</a></li>
        <li><a href="#">热门工具</a></li>
        <li><a href="#">优惠信息</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </nav> -->
    <nav class="navbar">
      <top></top>
    </nav>

    <nav class="sidebar">
      <sidebar></sidebar>
    </nav>

    <div class="main-content">
        <!-- 这里是页面主要内容 -->
        <div><search></search></div>
        <div><cardlist></cardlist></div>
    </div>
  </div>
</template>

<script>
import Top from './components/header.vue'
import Sidebar from './components/sidebar.vue'
import Search from './components/search.vue'
import Cardlist from './components/cardlist.vue'
export default {
  name: 'MyPage',
  components: {
    Sidebar,
    Search,
    Cardlist,
    Top
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
}

.navbar {
  background-color: #fff;
  width: 100%;
  height: 80px;
  position: fixed;
}


.sidebar {
  height: 100vh;
  margin: 0px;
  padding-top: 80px;
  width: 160px;
}

.main-content {
  width: calc(100vw - 160px);
  margin: 0px;
  background-color: #1A1B1D;
  padding-top: 100px;
  font-size: 24px;
  line-height: 1.5;
  color: #2f3542;
}
</style>
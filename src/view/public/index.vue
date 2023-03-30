<template>
  <div class="wrapper">
    <nav class="navbar">
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
import Sidebar from './components/sidebar.vue'
import Search from './components/search.vue'
import Cardlist from './components/cardlist.vue'
export default {
  name: 'MyPage',
  components: {
    Sidebar,
    Search,
    Cardlist
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
  height: 60px;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.navbar .logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2f3542;
}

.navbar .logo img {
  height: 40px;
  margin-right: 8px;
}

.navbar .title {
  font-size: 24px;
  font-weight: bold;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  margin-left: auto; /* 菜单靠右对齐 */
}

.menu li {
  margin-right: 32px;
}

.menu li:last-child {
  margin-right: 0;
}

.menu li a {
  color: #2f3542;
  font-size: 16px;
  text-decoration: none;
  padding: 12px;
  transition: all 0.3s ease-in-out;
}

.menu li a:hover {
  color: #1e90ff;
}

.sidebar {
  background-color: #2f3542;
  width: 240px;
  height: 100vh;
  position: fixed;
  z-index: 0;
  top: 60px;
  padding-top: 20px;
}

.main-content {
  margin-left: 240px; /* 让主要内容区域腾出侧边栏的宽度 */

  padding: 60px;
  padding-top: 100px;
  font-size: 24px;
  line-height: 1.5;
  color: #2f3542;
}
</style>
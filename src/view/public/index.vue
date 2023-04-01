<template>
  <div class="wrapper">
    <nav class="navbar">
      <top></top>
    </nav>

    <nav class="sidebar">
      <sidebar></sidebar>
    </nav>

    <div class="main-content">
        <!-- 这里是页面主要内容 -->
        <router-view></router-view>
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
<template>
  <div class="wrapper">
    <nav class="navbar">
      <top></top>
    </nav>

    <nav class="sidebar" :class="{'mobile-sidebar': isMobileFlag}">
      <sidebar @chooseMenu="chooseMenu" ></sidebar>
    </nav>

    <div class="main-content" :class="{'mobile-content': isMobileFlag}">
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
import {isMobile}  from '@/utils/page.js'


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
      isMobileFlag: false
    };
  },
  mounted() {
    this.isMobileFlag = isMobile()
  },
  methods: {
    chooseMenu(tag){
      console.log('index -- chooseMenu', tag)
    },
    
  }
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
  z-index: 1000;
}

.sidebar {
  height: 100vh;
  margin: 0px;
  padding-top: 80px;
  width: 160px;
}
.mobile-sidebar{
  width: 60px;
}

.main-content {
  height: calc(100vh - 80px) ;
  width: calc(100vw - 160px);
  margin: 0px;
  background-color: #1A1B1D;
  padding-top: 100px;
  font-size: 24px;
  line-height: 1.5;
  color: #2f3542;
  overflow-y: scroll;
}

.main-content::-webkit-scrollbar {
  width: 2px; 
}

.main-content::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: #4F5050;
  height: 60px !important;
}
.main-content::-webkit-scrollbar-thumb:hover {
  border-radius: 2px;
  background:  #EF3842;
}
.main-content::-webkit-scrollbar-track-piece {
  background-color: #3d3b3b !important;
  border-radius: 2px;
}

.mobile-content{
  width: calc(100vw - 50px);
}

</style>
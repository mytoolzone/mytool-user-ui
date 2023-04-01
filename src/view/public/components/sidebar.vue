<template>
 <div class="mymenu-wrap"> 
  <el-menu
    active-text-color="#EFEFEF"
    background-color="#272929"
    class="el-menu-vertical-demo mymenu-top"
    default-active="1-1"
    text-color="#BFC2C8"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
    </el-sub-menu>
 
  </el-menu>

  <el-menu
    active-text-color="#EFEFEF"
    background-color="#272929"
    class="el-menu-vertical-demo mymenu-bottom"
    default-active="1-1"
    text-color="#BFC2C8"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>关于我们</span>
      </template>
    </el-menu-item>
        <el-menu-item index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>留言交流</span>
      </template>
    </el-menu-item>
  </el-menu>

 </div>
 
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style  scoped>
  .mymenu-wrap {
    margin: 0%;
    padding: 0px;
    border: none;
  }
  .mymenu-top {
     flex: 8;
     height: calc(100vh - 80px - 120px) ;
     overflow-y:scroll;
         border-right: none;

  }
  .mymenu-top::-webkit-scrollbar {
   /*高宽分别对应横竖滚动条的尺寸*/
    width: 5px; 
 
  }

  .mymenu-top::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #4F5050;
    height: 60px !important;
  }
  .mymenu-top::-webkit-scrollbar-thumb:hover {
    border-radius: 2px;
    background:  #EF3842;
  }
  .mymenu-top::-webkit-scrollbar-track-piece {
    background-color: #3d3b3b !important;
    border-radius: 2px;
  }

  .mymenu-bottom{
     border-top: 1px solid #383d3f!important;
     border-right: none;
     height: 120px;
  }
</style>

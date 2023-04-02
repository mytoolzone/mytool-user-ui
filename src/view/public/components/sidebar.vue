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
        <el-menu-item v-for="(tag,index) in tags" :index="tag.value" @click="chooseMenu(tag.value)"> {{tag.label}} </el-menu-item>
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
    <el-menu-item index="about" @click="openAbout()">
      <template #title>
        <el-icon><location /></el-icon>
        <span>关于我们</span>
      </template>
    </el-menu-item>
        <el-menu-item index="node" @click="openTellUs()">
      <template #title>
        <el-icon><location /></el-icon>
        <span>留言交流</span>
      </template>
    </el-menu-item>
  </el-menu>
  <about v-show="isOpenAbout" @close="isOpenAbout = false"></about>
  <tellus v-show="isOpenTellUs" @close="isOpenTellUs = false"></tellus>
 </div>
 
</template>

<script>

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

import About from './about.vue'
import Tellus from './tellus.vue'


export default {
  name: 'sidebar',
  components: {
    About,
    Tellus
  },
  data() {
    return {
      isOpenAbout: false,
      isOpenTellUs: false,
      tags:[
        
      ]
    };
  },
  mounted(){
    let response = {"code":0,"data":{"list":[{"ID":41,"CreatedAt":"2023-04-01T12:11:34.536+08:00","UpdatedAt":"2023-04-01T23:51:21.824+08:00","label":"在线修图","value":"onlineEditImage","status":true,"sort":0,"sysDictionaryID":7},{"ID":48,"CreatedAt":"2023-04-01T20:37:36.846+08:00","UpdatedAt":"2023-04-01T23:51:38.313+08:00","label":"文档格式转换","value":"docConvert","status":true,"sort":1,"sysDictionaryID":7},{"ID":51,"CreatedAt":"2023-04-02T14:20:21.483+08:00","UpdatedAt":"2023-04-02T14:36:09.933+08:00","label":"低代码开发","value":"lowCode","status":true,"sort":1,"sysDictionaryID":7},{"ID":27,"CreatedAt":"2023-03-06T23:13:52.572+08:00","UpdatedAt":"2023-04-01T22:32:21.892+08:00","label":"Golang","value":"golang","status":true,"sort":2,"sysDictionaryID":7},{"ID":28,"CreatedAt":"2023-03-06T23:14:06.658+08:00","UpdatedAt":"2023-04-01T22:32:28.244+08:00","label":"JAVA","value":"java","status":true,"sort":2,"sysDictionaryID":7},{"ID":46,"CreatedAt":"2023-04-01T20:35:59.725+08:00","UpdatedAt":"2023-04-02T14:35:50.751+08:00","label":"WORD文档","value":"word","status":true,"sort":2,"sysDictionaryID":7},{"ID":47,"CreatedAt":"2023-04-01T20:36:15.018+08:00","UpdatedAt":"2023-04-02T14:35:40.459+08:00","label":"视频","value":"video","status":true,"sort":2,"sysDictionaryID":7},{"ID":29,"CreatedAt":"2023-03-06T23:14:23.098+08:00","UpdatedAt":"2023-04-01T22:32:34.837+08:00","label":"JS","value":"js","status":true,"sort":3,"sysDictionaryID":7},{"ID":42,"CreatedAt":"2023-04-01T12:12:59.162+08:00","UpdatedAt":"2023-04-02T14:35:45.841+08:00","label":"JSON处理","value":"json","status":true,"sort":3,"sysDictionaryID":7},{"ID":49,"CreatedAt":"2023-04-01T20:51:44.033+08:00","UpdatedAt":"2023-04-02T14:35:30.259+08:00","label":"AI图像处理","value":"aiImage","status":true,"sort":3,"sysDictionaryID":7}],"total":13,"page":1,"pageSize":10},"msg":"获取成功"}
    this.tags = response.data.list
  },
  methods: {
    openAbout() {
      this.isOpenAbout = true
    },
    openTellUs() {
      this.isOpenTellUs = true
    },
    handleOpen (key, keyPath) {
      //console.log('open ',key, keyPath)
    },
    handleClose (key, keyPath) {
      //console.log(key, keyPath)
    },
    chooseMenu(key){
      console.log('chooseMenu' , key)
      this.$emit('chooseMenu', key)
      this.$router.push({name:'Index', query :{tag: key}})
    }
  }
};


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

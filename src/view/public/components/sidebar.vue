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
    :collapse="isMobileFlag"
  >
      <el-menu-item v-for="(tag,index) in tags" :index="tag.value" @click="chooseMenu(tag)"> 
        <el-icon><setting />
          <span v-show="isMobileFlag" style="font-size:5px">
            {{tag.label}} 
          </span>  
        </el-icon>
        <template #title v-show="!isMobileFlag">
          <span v-show="!isMobileFlag">
            {{tag.label}} 
          </span>  
        </template>
      </el-menu-item>


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
import {isMobile}  from '@/utils/page.js'
import { useUserStore } from '@/pinia/modules/user'

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
      isMobileFlag: false,
      isCollapse: false,
      tags:[]
    };
  },
  watch: {
    '$route': function(newRoute){
      console.log('reouter watch' , newRoute)
      this.setMenuContent(this.$route.name)
    }
  },
  mounted(){
    this.setMenuContent(this.$route.name)
    this.isMobileFlag = isMobile()
    //console.log('this.isMobile', this.isMobileFlag, this.$route )
  },
  methods: {
    setMenuContent(page){
      if(page == "Person" || page == 'Safe') {
        this.tags =[
          {'label':'修改密码',fn: this.changePwd},
          {'label':'我的收藏',fn: this.gotoCollect},
          {'label':'退出登陆',fn: this.logout} ]
      }else{
        this.tags =[{"ID":54,"CreatedAt":"2023-04-11T21:50:12.743+08:00","UpdatedAt":"2023-04-15T13:50:54.612+08:00","label":"AI写作","value":"ai-writer","status":true,"sort":1,"sysDictionaryID":7},{"ID":55,"CreatedAt":"2023-04-11T21:51:12.376+08:00","UpdatedAt":"2023-04-15T13:51:31.451+08:00","label":"AI图像","value":"ai-image","status":true,"sort":1,"sysDictionaryID":7},{"ID":56,"CreatedAt":"2023-04-11T21:52:12.187+08:00","UpdatedAt":"2023-04-15T13:51:12.481+08:00","label":"AI视频","value":"ai-video","status":true,"sort":1,"sysDictionaryID":7},{"ID":57,"CreatedAt":"2023-04-15T13:42:46.14+08:00","UpdatedAt":"2023-04-15T13:51:35.78+08:00","label":"AI编程","value":"ai-coding","status":true,"sort":1,"sysDictionaryID":7},{"ID":58,"CreatedAt":"2023-04-15T13:49:47.63+08:00","UpdatedAt":"2023-04-15T13:51:04.97+08:00","label":"AI训练","value":"ai-training","status":true,"sort":1,"sysDictionaryID":7},{"ID":59,"CreatedAt":"2023-04-15T13:52:33.583+08:00","UpdatedAt":"2023-04-15T13:52:57.097+08:00","label":"AI翻译","value":"ai-translation","status":true,"sort":1,"sysDictionaryID":7},{"ID":41,"CreatedAt":"2023-04-01T12:11:34.536+08:00","UpdatedAt":"2023-04-15T13:50:25.454+08:00","label":"在线修图","value":"onlineEditImage","status":true,"sort":2,"sysDictionaryID":7},{"ID":42,"CreatedAt":"2023-04-01T12:12:59.162+08:00","UpdatedAt":"2023-04-15T13:55:43.631+08:00","label":"编码转换","value":"json","status":true,"sort":2,"sysDictionaryID":7},{"ID":46,"CreatedAt":"2023-04-01T20:35:59.725+08:00","UpdatedAt":"2023-04-15T13:53:44.834+08:00","label":"文档处理","value":"word","status":true,"sort":2,"sysDictionaryID":7},{"ID":47,"CreatedAt":"2023-04-01T20:36:15.018+08:00","UpdatedAt":"2023-04-15T13:54:17.564+08:00","label":"视频剪辑","value":"video","status":true,"sort":2,"sysDictionaryID":7},{"ID":48,"CreatedAt":"2023-04-01T20:37:36.846+08:00","UpdatedAt":"2023-04-15T13:53:25.936+08:00","label":"格式转换","value":"docConvert","status":true,"sort":2,"sysDictionaryID":7},{"ID":51,"CreatedAt":"2023-04-02T14:20:21.483+08:00","UpdatedAt":"2023-04-15T13:50:43.322+08:00","label":"低代码开发","value":"lowCode","status":true,"sort":2,"sysDictionaryID":7},{"ID":60,"CreatedAt":"2023-04-15T13:58:14.227+08:00","UpdatedAt":"2023-04-15T13:58:33.964+08:00","label":"图表分析","value":"chart","status":true,"sort":3,"sysDictionaryID":7}]
      }
    },
    openAbout() {
      this.isOpenAbout = true
    },
    openTellUs() {
      this.isOpenTellUs = true
    },
    changePwd() {
      this.$router.push({name:'Safe'})
    },
    gotoCollect() {
      this.$router.push({name:'Collections'})
    },
    async logout() {
      console.log('logout')
      const userStore = useUserStore()
      userStore.LoginOut()
      //this.$router.push({name:'Index'})
    },
    chooseMenu(menu){
      console.log('chooseMenu' , menu)
      if(menu.fn){
        menu.fn()
        return
      }
      let key = menu.value
      this.$emit('chooseMenu', key)
      this.$router.push({name:'Index', query :{tag: key}})
    },
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

<template>
  <nav>
    <div class="logo" :class="{'logo-mobile': isMobileFlag}">
      <img src="https://tools.mytool.zone/logo.png" alt="Logo">
    </div>
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        <a :href="item.link" @mouseover="handleMouseover(navItems.length - index - 1)">
          <i class="iconfont"></i>
          {{ item.text }}
          <span v-show="navItems.length - index - 1 === activeIndex">▼</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #272929;
  height: 80px;
  display: flex;
  align-items: center;

  .logo {
    margin-right: 60px;
    //margin-left: 40px;
    img {
      height: 80px;
      width: 160px;
    }
  }
  .logo-mobile{
    margin-right: 0px;
    img {
      height: 60px;
      width: 60px;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin: 0 20px;

      a {
        color: #c6c9cf;
        text-decoration: none;
        position: relative;

        i {
          font-size: 18px;
          margin-right: 5px;
        }

        span {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }

        &:hover span,
        &:focus span {
          bottom: -20px;
          opacity: 1;
        }
      }
    }
  }
}
</style>

<script>
import {isMobile}  from '@/utils/page.js'

export default {
  data() {
    return {
      isMobileFlag: false,
      navItems: [
        { text: 'AiTool', link: '#/?tag=ai', icon: 'icon-home' },
        // { text: '快命令', link: '#/user/userCmds', icon: 'icon-cog' },
        // { text: '收藏', link: '#/user/collect', icon: 'icon-cog' },
        // { text: '我的', link: '#/layout/person', icon: 'icon-gift' },
      ],
      activeIndex: -1
    }
  },
  mounted(){
    this.isMobileFlag = isMobile()
  },
  methods: {
    handleMouseover(index) {
      this.activeIndex = index
    }
  }
}
</script>
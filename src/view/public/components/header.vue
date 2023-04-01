<template>
  <nav>
    <div class="logo">
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
      //border-radius: 100px;
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
      margin: 0 10px;

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
export default {
  data() {
    return {
      navItems: [
        { text: 'AiTool', link: '#', icon: 'icon-home' },
        { text: '推荐工具', link: '#', icon: 'icon-cog' },
        { text: '我的工具', link: '#', icon: 'icon-cog' },
        { text: '个人收藏', link: '#', icon: 'icon-cog' },
        { text: '个人中心', link: '#/layout/person', icon: 'icon-gift' },
      ],
      activeIndex: -1
    }
  },
  methods: {
    handleMouseover(index) {
      this.activeIndex = index
    }
  }
}
</script>
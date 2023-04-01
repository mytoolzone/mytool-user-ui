<template>
  <div class="recommendations">
    <h2>推荐列表</h2>
    <div class="scroll-container">
      <div class="scroll-content" :style="{ transform: `translateX(${-itemWidth * currentIndex}px)` }">
        <div v-for="(item, index) in items" :key="index" class="item">
          <img :src="item.image" alt="Recommendation Image">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // 推荐列表数据
      currentIndex: 0, // 当前显示项的索引
      itemWidth: 300 // 每个项的宽度
    }
  },
  mounted() {
    // 模拟从 API 获取推荐列表数据，并更新组件状态
    this.items = [
      {
        title: 'Item 1',
        image: 'https://via.placeholder.com/300x200',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      {
        title: 'Item 2',
        image: 'https://via.placeholder.com/300x200',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Item 3',
        image: 'https://via.placeholder.com/300x200',
        description: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Item 4',
        image: 'https://via.placeholder.com/300x200',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'Item 5',
        image: 'https://via.placeholder.com/300x200',
        description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
     {
        title: 'Item 6',
        image: 'https://via.placeholder.com/300x200',
        description: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Item 7',
        image: 'https://via.placeholder.com/300x200',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'Item 8',
        image: 'https://via.placeholder.com/300x200',
        description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  },
  methods: {
    goToPrev() {
      // 向前滚动一项
      this.currentIndex = Math.max(this.currentIndex - 1, 0);
    },
    goToNext() {
      // 向后滚动一项
      this.currentIndex = Math.min(this.currentIndex + 1, this.items.length - 1);
    }
  }
}
</script>

<style lang="scss"  scoped>
.recommendations {
  max-width: 800px;
  margin: 0 auto;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: left;
    color: rgb(124, 150, 209);
  }

  .scroll-container {
    overflow-x: hidden;
    position: relative;
    margin-bottom: 20px;
  }

  .scroll-content {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .item {
    min-width: 240px;
    margin-right: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;

    img {
      max-width: 100%;
      border-radius: 5px;
      margin-bottom: 0px;
    }

    h3 {
      font-size: 18px;
      margin-top: 8px;
      margin-bottom: 0px;
      color: rgb(152, 237, 14);
    }

    p {
      text-align: left;
      height: 45px;
      overflow: hidden;
      color: rgb(102, 108, 119);
    }
  }

  .controls {
    display: flex;
    justify-content: center;

    .control-button {
      width: 15px;
      height: 15px;
      background-color: #f2f2f2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
      cursor: pointer;

      &:hover {
        background-color: #e6e6e6;
      }

      i {
        font-size: 16px;
        color: #333;
      }
    }
  }
}
</style>
<template>
  <div class="search-container">
    <div class="search-wrapper">
      <input type="text" v-model="keyword" placeholder="请输入搜索关键字" />
      <span class="search-icon" @click="search"></span>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    search() {
      console.log(`您正在搜索：${this.keyword}`);
      // 在这里执行搜索操作，例如向后端发送请求并更新页面数据。
    },
  },
};
</script>

<style scoped>
.search-container {
  position: relative;
}

.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  padding: 8px;
  margin-right: 8px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
}

.search-icon {
  width: 24px;
  height: 24px;
  background-image: url('/path/to/search-icon.png'); /* 替换为你自己的搜索图标 */
  background-size: cover;
  cursor: pointer;
}

.background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-image: url('https://source.unsplash.com/random/1200x80');
  background-size: cover;
  animation: move-background 10s linear infinite;
}

@keyframes move-background {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
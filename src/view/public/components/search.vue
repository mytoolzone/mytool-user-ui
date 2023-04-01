<template>
  <div class="search-bar">
    <input type="text" v-model="value" @input="handleInput" :class="{ 'large-input': value }" />
    <button @click="handleSearch">搜索</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SearchBar',
  setup() {
    const value = ref('')
    const background = ref('https://toolsdar.com/wp-content/themes/onenav/images/fx/mountain-2.png')

    function handleInput(event) {
      value.value = event.target.value
    }

    function handleSearch() {
      console.log('搜索：', value.value)
    }

    return {
      value,
      background,
      handleInput,
      handleSearch
    }
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* 修改背景图高度为 300px */
  position: relative;
  background-image: url('https://toolsdar.com/wp-content/themes/onenav/images/fx/mountain-2.png');
  background-position:bottom;
  background-repeat: no-repeat;
  background-size: contain;

  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;

    &.large-input { /* 根据是否有值来判断是否增加宽度 */
      width: 300px;
    }
  }

  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none; /* 去掉光标 */

    &:hover {
      background-color: #666;
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>
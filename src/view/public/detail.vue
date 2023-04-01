<template>
  <div class="article">
    <div class="image-container">
      <img :src="article.image" alt="Article Image">
    </div>
    <div class="content-container">
      <h1>{{ article.title }}</h1>
      <div class="info">
        <span>Author: {{ article.author }}</span>
        <span>Date: {{ article.date }}</span>
        <div class="tags">
          <span v-for="(tag, index) in article.tags" :key="index">{{ tag }}</span>
        </div>
      </div>
    </div>
  <div class="body">
    <p>{{ article.content }}</p>
  </div>
  <div class="recommend">
    <recommends></recommends>
  </div>
  </div>
</template>

<script>
import Recommends from './components/recommend.vue'

export default {
  components: {
    Recommends,
  },
  data() {
    return {
      article: {}
    }
  },
  mounted() {
    // 模拟从 API 获取文章数据
    this.article = {
      title: 'Vue 3 Article Detail',
      image: 'https://api.iowen.cn/favicon/www.jianguoyun.com.png',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit... wwwwwwwwwwwwwwwwwww',
      author: 'John Doe',
      date: 'April 1, 2023',
      tags: ['Vue', 'Frontend', 'Web Development']
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
  color: #f2f2f2;

  .image-container {
    padding: 15px;
    float: left;
    img {
      padding-top: 25px;
      padding-left: 45px;
      width: 120px;
    }
  }

  .content-container {
    width: 500px;
    margin-left: 230px;
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
      color: #1ef858; /* 明亮蓝色 */
    }

    p {
      margin-bottom: 20px;
      color: #333; /* 深灰色 */
    }

    .info {
      margin-top: 20px;
      color: #08de93; /* 灰色 */

      span {
        display: block;
        margin-bottom: 10px;
      }

      .tags {
        margin-top: 10px;

        span {
          display: inline-block;
          padding: 5px 10px;
          background-color: #333232;
          border-radius: 3px;
          margin-right: 10px;
          color: #971515; /* 深灰色 */
        }
      }
    }
  }

  .body p{
    font-size: 16px;
    min-height: 300px;
    color: #d4d4d4;
  }
}
</style>
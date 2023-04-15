<template>
  <div class="article">
    <div class="image-container">
      <img :src="article.icon" alt="Article Image" />
    </div>
    <div class="content-container">
      <h1>{{ article.name }}</h1>
      <div class="info">
        <span
          >访问地址:
          <a :href="toolPackage.apiUrl" target="_blank" style="color: #62ebf4">
            {{ toolPackage.apiUrl }}</a
          ></span
        >
        <!-- <span>Date: {{ article.CreatedAt }}</span> -->
        <div @click="collect">
          <el-icon><Star /></el-icon>

          <i>{{ isCollect ? '取消收藏' : '加入收藏' }} </i>
        </div>
        <div class="tags">
          <span>{{ article.tags }}</span>
          <!-- <span v-for="(tag, index) in article.tags" :key="index">{{ tag }}</span> -->
        </div>
      </div>
    </div>
    <div class="body">
      <p>{{ article.desc }}</p>
    </div>

    <div v-if="article.attr == 'innnerComponent'" style="display: block">
      <async-component
        :innerComp="toolPackage.uiData"
        style="display: block"
      ></async-component>
    </div>

    <div v-if="article.attr == 'iframe'">
      <div class="workbench" :class="{ max: isMaxWorkbench }">
        <el-row>
          <el-col :span="5" @click="expandWorkbench" class="btn">
            放大功能区
          </el-col>
          <el-col :span="5" @click="reduceWorkbench" class="btn">
            缩小功能区
          </el-col>
        </el-row>
        <iframe :src="toolPackage.apiUrl" width="100%" height="360px"> </iframe>
      </div>
    </div>

    <div class="recommend">
      <recommends></recommends>
    </div>
  </div>
</template>

<script>
import Recommends from './components/recommend.vue'
import AsyncComponent from './tools/async-component.vue'
import { findIndexTool, getRecommendToolList } from '@/api/tools'
import { findIndexToolPackage } from '@/api/toolPackage'

export default {
  components: {
    Recommends,
    AsyncComponent
  },
  data() {
    return {
      article: {},
      toolPackage: {},
      id: 0,
      isMaxWorkbench: false,
      isCollect: false
    }
  },
  watch: {
    '$route.query.id': function () {
      // 只要categoryId的值发生变化,这个方法就会被调用
      this.id = this.$route.query.id
      //重新调用请求数据的方法，刷新页面数据
      if (this.$route.name == 'Detail') {
        this.load()
      }
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.load()
  },
  methods: {
    expandWorkbench() {
      console.log('expandWorkbench')
      this.isMaxWorkbench = true
    },
    reduceWorkbench() {
      console.log('reduceWorkbench')
      this.isMaxWorkbench = false
    },
    load() {
      findIndexTool({ ID: this.id }).then((res) => {
        if (res.code == 0) {
          this.article = res.data.retools
          console.log('---', this.article)
        }
      })

      findIndexToolPackage({ ID: this.id }).then((res) => {
        if (res.code == 0) {
          this.toolPackage = res.data.retoolPackage
          console.log('---toolPackage', this.toolPackage)
        }
      })
    },
    collect() {
      this.isCollect = !this.isCollect
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding: 0px;
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
      min-height: 90px;
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
      i {
        font-style: normal;
        margin-right: 5px;
        font-size: 16px;
      }
      .el-icon {
        vertical-align: text-top;
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

  .body {
    background-color: #272929;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 5px;
  }
  .body p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-size: 16px;
    min-height: 50px;
    color: #616a72;
    text-indent: 2em;
    line-height: 2em;
    margin-top: 25px;
  }

  .workbench {
    .btn {
      font-weight: 600;
      cursor: pointer;
      padding: 8px 0px;
      margin-left: 15px;
      text-align: center;
      background: #333232;
    }
    iframe {
      border: none;
    }
  }

  .max {
    position: fixed;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: #272929;
    opacity: 0.99;
    iframe {
      height: calc(100vh - 80px);
    }
  }
}
</style>

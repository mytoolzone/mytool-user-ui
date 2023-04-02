<template>
  <div class="article">
    <div class="image-container">
      <img :src="article.icon" alt="Article Image">
    </div>
    <div class="content-container">
      <h1>{{ article.name }}</h1>
      <div class="info">
        <span>访问地址: <a :href="toolPackage.apiUrl" target="_blank" style="color:#62EBF4"> {{ toolPackage.apiUrl }}</a></span>
        <span>Date: {{ article.CreatedAt }}</span>
        <div class="tags">
          <span>{{ article.tags }}</span>
          <!-- <span v-for="(tag, index) in article.tags" :key="index">{{ tag }}</span> -->
        </div>
      </div>
    </div>
  <div class="body">
    <p>{{ article.desc }}</p>
  </div>
  <div class="recommend">
    <recommends></recommends>
  </div>
  </div>
</template>

<script>
import Recommends from './components/recommend.vue'
import { findIndexTool, getRecommendToolList } from "@/api/tools"
import { findIndexToolPackage } from "@/api/toolPackage"

export default {
  components: {
    Recommends,
  },
  data() {
    return {
      article: {},
      toolPackage: {},
      id: 0,
    }
  },
  watch: {
     '$route.query.id': function(){
    	// 只要categoryId的值发生变化,这个方法就会被调用
      this.id =this.$route.query.id
      //重新调用请求数据的方法，刷新页面数据
      if(this.$route.name == 'Detail'){
        this.load()
      }
    }
  },
  mounted() {
    this.id =this.$route.query.id
    this.load()
  },
  methods:{
    load(){
      findIndexTool({ID:this.id}).then( res=>{
        if(res.code == 0 ){
          this.article = res.data.retools
          console.log('---' , this.article)
        }
      })

      findIndexToolPackage({ID: this.id}).then( res=> {
        if(res.code == 0 ){
          this.toolPackage = res.data.retoolPackage
          console.log('---toolPackage' , this.toolPackage)
        }
      })
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
    min-height: 160px;
    color: #d4d4d4;
    text-indent: 2em;
    line-height: 2em;
    margin-top: 25px;
  }
}
</style>
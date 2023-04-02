<template>
  <div class="card-list">
    <div v-for="(item, index) in items" :key="index" class="card" @click="goToDetail(item.ID)">
      <div> 
          <div class="image-container">
            <a data-pswp-width='512' data-pswp-height='512' target='_blank' href="item.icon">
              <img class="card-cover" :src="item.icon" alt="card image" />
            </a>
          </div>
         <div class="content-container">
          <h2>{{ item.name }}</h2>
          <p>{{ item.desc }}</p>
         </div>
      </div>
      <div class="tags">
      <span  class="tag">{{ item.tags }}</span>
         <!-- <span v-for="(tag, index) in item.tags" :key="index" class="tag">{{ tag }}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getIndexToolList} from "@/api/tools"


export default {
  data() {
    return {
      tag: '',
      keyword: '',
      items: [],
    };
  },
  mounted(){
      this.tag =this.$route.query.tag
      this.getIndexToolList()
  },
  watch: {
     '$route.query.tag': function(){
    	// 只要categoryId的值发生变化,这个方法就会被调用
      this.tag =this.$route.query.tag
      //重新调用请求数据的方法，刷新页面数据
      if(this.$route.name == 'Index'){
        this.getIndexToolList()
      }
    },
    '$route.query.keyword': function(){
    	// 只要categoryId的值发生变化,这个方法就会被调用
      this.keyword =this.$route.query.keyword
      //重新调用请求数据的方法，刷新页面数据
      if(this.$route.name == 'Index'){
        this.getIndexToolList()
      }
    },
  },
  methods:{
    async getIndexToolList(){
      let toolList =await getIndexToolList({tags: this.tag ,keyword: this.keyword})
      console.log('toolList', toolList)
      if(toolList.code == 0){
        this.items = toolList.data.list
      }
    },
    goToDetail(toolId){
      console.log('goToDetail', toolId)
      this.$router.push({ name:'Detail', query :{id: toolId}})
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-left: 15px;
  overflow-y: scroll;
  /*justify-content: space-around;*/
}

.card {
  background-color: #272929;
  color: #c6c9cf;
  width: 250px;
  height: 90px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(20, 20, 20, 0.9);
  transition: all 0.1s ease-out;
}

.card:hover {
  /*box-shadow: 4px 4px 12px rgba(150, 145, 137, 0.688);*/
  transform: translate(0,-5px);
  color: #fafbfd;
  cursor: pointer;
}

.image-container {
  width: 48px;
  margin-right: 16px;
  float: left;
}

.card-cover {
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 6px;
}

p {
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 8px;
  height: 36px;
  overflow: hidden;
  display: block;
  color: #6c757d;
}

.tags {
  margin-top: auto;
}

.tag {
  display: inline-block;
  padding: 4px 16px;
  background-color: #181717;
  color: #6c757d;
  font-size: 12px;
  line-height: 1;
  margin-right: 8px;
  border-radius: 4px;
}
.tag:hover{
  color: #f6f9ff;
}
</style>
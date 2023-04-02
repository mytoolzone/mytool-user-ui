<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <h2 class="title">留言反馈</h2>
        <form @submit.prevent="submitForm" class="form">
          <div>
            <label for="name">姓名：</label>
            <input class="input" type="text" id="name" v-model="form.name" />
          </div>
          <div>
            <label for="email">邮箱：</label>
            <input class="input" type="email" id="email" v-model="form.email" />
          </div>
          <div>
            <label for="message">留言：</label>
            <textarea class="input" id="message" v-model="form.message"></textarea>
          </div>
          <button type="submit">提交</button>
        </form>
      </div>
    </div>
</template>

<script>
  import { ref } from 'vue';
  import {createIndexComment} from '@/api/comments'

  export default {
    data() {
        return {
            form:{
                name: '',
                email: '',
                message: '',
            }
        }
    },
    methods:{
        submitForm () {
            console.log(this.form);
            var content = `name:${this.form.name},email:${this.form.email},content:${this.form.message}`
            createIndexComment( {content: content}).then(res => {
                if(res.code = 0){
                    alert('感谢您的宝贵意见')
                }
            })
            this.close()
        },
        close(){
            this.$emit('close')
        }
    }
  };
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #413f3f;
  margin: 15% auto;
  padding: 20px;
  border: 5px solid #4e4b4b;
  width: 80%;
  color: #fbed9f;
  width: 330px;
  line-height: 1.8em;
  word-break: break-word;
  white-space: pre-line;
}
.title {
  text-align: center;
}
.content {
  width: 600px;
  text-indent: 2em;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.from{
    width: 400px;
    margin: 0 auto;
}
.input{
    width: 320px;
    height: 25px;
    border: none;
}
textarea.input {
    min-height: 120px;
}
</style>
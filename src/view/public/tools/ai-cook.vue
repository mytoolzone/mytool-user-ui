<template>
  <div class="tool-form-body">
    <h2>Ai厨师</h2>
    <el-form>
      <el-form-item class="form-item" label="想吃点什么">
        <el-input v-model="form.content" placeholder="我是一名素食主义者，我正在寻找健康的晚餐点子"></el-input>
      </el-form-item>
      <div class="form-item">
        <el-button
          type="primary"
          @click="submitForm"
          v-loading.fullscreen.lock="loading"
          >提交</el-button
        >
        <el-button @click="resetForm">重置</el-button>
      </div>
    </el-form>
    <div>
      <h2>Ai厨师</h2>
      <div class="ai-result">
        <pre width="50">{{ aiAnswer }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { ElLoading } from 'element-plus'

export default {
  name: 'TravelForm',
  setup() {
    const form = ref({
      content: '',
      hotels: [],
      loading: ref(true)
    })

    const aiAnswer = ref('')

    const submitForm = () => {
      console.log('submitForm', form.value)
      let val = form.value
      let input = `我要你做我的私人厨师。我会告诉你我的饮食偏好和过敏，你会建议我尝试的食谱。你应该只回复你推荐的食谱，别无其他。不要写解释。我的第一个请求是“${val.content}”`
      // console.log(input)
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      setTimeout(() => {
        loading.close()
      }, 60000)
      axios
        .get(
          'http://chatai.chatai.1127451475362062.ap-southeast-1.fc.devsapp.net/?q=' +
            input
        )
        .then((res) => {
          console.log('res ', res, res.data.choices[0].message.content)
          if (res.status == 200) {
            aiAnswer.value = res.data.choices[0].message.content
            loading.close()
          }
        })
    }

    const resetForm = () => {
      form.value = {
        compositionTitle: '',
        compositionWordNumber: '',
        transportation: ''
      }
    }

    return {
      form,
      submitForm,
      resetForm,
      aiAnswer
    }
  }
}
</script>

<style scoped>
.tool-form-body {
  max-width: 800px;
  padding: 15px;
  margin: 0 auto;
}

.form-item {
  margin-bottom: 20px;
}

label {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.ai-result {
  width: 770px;
}
pre {
  padding: 15px;
  border: 1px solid #fff;
  min-height: 100px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>

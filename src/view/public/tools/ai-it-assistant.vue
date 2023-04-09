<template>
  <div class="tool-form-body">
    <h2>Ai电脑助手</h2>
    <el-form>
      <el-form-item class="form-item" label="电脑故障">
        <el-input v-model="form.content" placeholder="我的笔记本电脑出现蓝屏错误"></el-input>
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
      <h2>Ai回复</h2>
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
      let input = `我希望你充当 IT 专家。我会向您提供有关我的技术问题所需的所有信息，而您的职责是解决我的问题。你应该使用你的计算机科学、网络基础设施和 IT 安全知识来解决我的问题。在您的回答中使用适合所有级别的人的智能、简单和易于理解的语言将很有帮助。用要点逐步解释您的解决方案很有帮助。尽量避免过多的技术细节，但在必要时使用它们。我希望您回复解决方案，而不是写任何解释。我的第一个请求是“${val.content}”`
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

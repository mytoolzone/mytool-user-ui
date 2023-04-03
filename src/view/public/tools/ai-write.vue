<template>
  <div class="travel-form">
    <h2>作文大全</h2>
    <el-form>
      <div class="form-item">
        <label>作文题目：</label>
        <el-input
          v-model="form.compositionTitle"
          placeholder="请输入作文题目"
        ></el-input>
      </div>
      <div class="form-item">
        <label>作文字数：</label>
        <el-input
          v-model="form.compositionWordNumber"
          placeholder="请输入作文字数"
        ></el-input>
      </div>
      <div class="form-item">
        <label> 作文提纲：</label>
        <el-input
          v-model="form.compositionOutline"
          placeholder="请输入作文提纲"
        >
        </el-input>
      </div>

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
      <h2>Ai安排结果</h2>
      <div class="ai-result">
        <pre width="50">
          我的妈妈

我妈妈是我生命中最重要的人之一。她是一个勇敢、善良且有智慧的女性。在我成长的过程中，她一直陪伴着我，带领我走过了人生中的每一个阶段。

我的妈妈很坚强。在我小时候，我们家的经济条件并不是很好，但她还是能够把我们抚养得很好。每个月，她都会精打细算，为我们提供最好的生活条件。我记得有一次，我生病了，妈妈不仅自己没吃饭，还为我买了药，帮助我治疗。她用自己的无私奉献换来的是我的健康和欣慰。

我的妈妈也是一个聪明机智的女性。我曾经在学校里遇到了一些困难，但妈妈总是能够给我最好的建议和支持。有一次，我在学校里遇到了欺负，感到很失落和无助。但我的妈妈告诉我，“要勇敢地面对挑战和困难，并且不要放弃”。她还给我提供了各种解决问题的方式，让我知道应该如何面对问题，如何成长。
总之，我的妈妈是一个伟大的女性，她让我变成了今天的我。她的爱和关心不仅是我成为正直和坚强的人的基础，也教会我如何用爱去关心别人。无论我去到哪里，我的妈妈一直在我的身边，给我指引和支持。有个这样坚强、智慧、善良的人来自我的生活赐予我无尽的幸福、力量和智慧。
我的妈妈还是一个善良温暖的人。虽然在生活中遇到了很多不公平的事情，但她从不失去自己的善意。我曾经跟她一起去买东西，但商家却欺骗了我们。我感到很愤怒，但妈妈却告诉我，“不要跟坏人计较，但一定要保护自己”。她不仅帮助我变得更加强大，还教会我与人相处的方式和品德。
总之，我的妈妈是一个伟大的女性，她让我变成了今天的我。她的爱和关心不仅是我成为正直和坚强的人的基础，也教会我如何用爱去关心别人。无论我去到哪里，我的妈妈一直在我的身边，给我指引和支持。有个这样坚强、智慧、善良的人来自我的生活赐予我无尽的幸福、力量和智慧。
总之，我的妈妈是一个伟大的女性，她让我变成了今天的我。她的爱和关心不仅是我成为正直和坚强的人的基础，也教会我如何用爱去关心别人。无论我去到哪里，我的妈妈一直在我的身边，给我指引和支持。有个这样坚强、智慧、善良的人来自我的生活赐予我无尽的幸福、力量和智慧。   

<!-- {{ aiAnswer }} -->
      </pre>
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
      compositionTitle: '我的妈妈',
      compositionWordNumber: '500',
      compositionOutline: '外貌描写',
      hotels: [],
      loading: ref(true)
    })

    const aiAnswer = ref('')

    const submitForm = () => {
      console.log('submitForm', form.value)
      let val = form.value
      let input = `请制定一个作文题目为 ${val.compositionTitle}作文字数${val.compositionWordNumber}的作文，写${val.compositionOutline}的`
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

<style>
.travel-form {
  max-width: 800px;
  padding: 15px;
  margin: 0 auto;
  height: calc(100vh - 60px);
  z-index: -99999;
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

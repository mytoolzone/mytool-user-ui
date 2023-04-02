<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="userId字段:" prop="userId">
          <el-input v-model.number="formData.userId" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="upNum字段:" prop="upNum">
          <el-input v-model.number="formData.upNum" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="评论内容:" prop="content">
          <el-input v-model="formData.content" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="状态:" prop="status">
          <el-input v-model="formData.status" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="评论目标类型:" prop="targetType">
          <el-input v-model="formData.targetType" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="评论目标id:" prop="targetId">
          <el-input v-model.number="formData.targetId" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="pid字段:" prop="pid">
          <el-input v-model.number="formData.pid" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments'
}
</script>

<script setup>
import {
  createComments,
  updateComments,
  findComments
} from '@/api/comments'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            userId: 0,
            upNum: 0,
            content: '',
            status: '',
            targetType: '',
            targetId: 0,
            pid: 0,
        })
// 验证规则
const rule = reactive({
               userId : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               upNum : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               content : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               targetType : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               targetId : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               pid : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findComments({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.recomments
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createComments(formData.value)
               break
             case 'update':
               res = await updateComments(formData.value)
               break
             default:
               res = await createComments(formData.value)
               break
           }
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
             })
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>

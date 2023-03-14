<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="120px">
        <!-- <el-form-item label="开发者:" prop="userId">
          <el-input v-model.number="formData.userId" :clearable="true" placeholder="请输入" />
        </el-form-item> -->
        <el-form-item label="名称:" prop="name">
          <el-input v-model="formData.name" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="图标:" prop="icon">
          <el-input v-model="formData.icon" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="命令:" prop="cmd">
          <el-input v-model="formData.cmd" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="工作目录:" prop="wrokDir">
          <el-input v-model="formData.wrokDir" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="环境变量:" prop="envs">
          <el-input v-model="formData.envs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="是否保活:" prop="keepAlive">
          <el-switch v-model="formData.keepAlive" active-color="#13ce66" inactive-color="#ff4949" active-text="是" inactive-text="否" clearable ></el-switch>
        </el-form-item>
        <el-form-item label="类型:" prop="type">
          <el-input v-model="formData.type" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="描述信息:" prop="desc">
          <el-input v-model="formData.desc" :clearable="true" placeholder="请输入" />
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
  name: 'UserCmds'
}
</script>

<script setup>
import {
  createUserCmds,
  updateUserCmds,
  findUserCmds
} from '@/api/userCmds'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const user_cmd_typeOptions = ref([])
const formData = ref({
            userId: 0,
            name: '',
            icon: '',
            cmd: '',
            wrokDir: '',
            envs: '',
            keepAlive: false,
            type: '',
            desc: '',
        })
// 验证规则
const rule = reactive({
               name : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               cmd : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               wrokDir : [{
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
      const res = await findUserCmds({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.reuserCmds
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
    user_cmd_typeOptions.value = await getDictFunc('user_cmd_type')
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createUserCmds(formData.value)
               break
             case 'update':
               res = await updateUserCmds(formData.value)
               break
             default:
               res = await createUserCmds(formData.value)
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

<style scoped>
.gva-form-box{
  padding: 40px 80px;
}
 
</style>

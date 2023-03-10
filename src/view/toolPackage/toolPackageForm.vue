<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="top" :rules="rule" label-width="120px">
        <!-- <el-form-item label="工具id:" prop="toolId">
          <el-input v-model.number="formData.toolId" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="名称:" prop="name">
          <el-input v-model="formData.name" :clearable="true" placeholder="请输入" />
        </el-form-item> -->

        <el-form-item prop="uiData">
          <slot name="form-item"> 功能表单 -- &nbsp;
           <el-link type="success" href="/#/layout/systemTools/formCreate" target="blank">创建表单<i class="el-icon-view el-icon--right"></i> </el-link>
          </slot>
          <el-input type="textarea" v-model="formData.uiData" :clearable="true" placeholder="请输入" />
        </el-form-item>

        <el-form-item prop="config">
          <slot name="form-item"> 配置表单 -- &nbsp;
           <el-link type="success" href="/#/layout/systemTools/formCreate" target="blank">创建表单<i class="el-icon-view el-icon--right"></i> </el-link>
          </slot>
          <el-input type="textarea" v-model="formData.config" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="提交地址:" prop="apiUrl">
          <el-input v-model="formData.apiUrl" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="源代码地址:" prop="packageUrl">
          <el-input v-model="formData.packageUrl" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="二进制地址:" prop="binaryUrl">
          <el-input v-model="formData.binaryUrl" :clearable="true" placeholder="请输入" />
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
  name: 'ToolPackage'
}
</script>

<script setup>
import {
  createToolPackage,
  updateToolPackage,
  findToolPackage
} from '@/api/toolPackage'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            toolId: 0,
            name: '',
            uiData: '',
            config: '',
            apiUrl: '',
            packageUrl: '',
            binaryUrl: '',
        })
// 验证规则
const rule = reactive({
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findToolPackage({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.retoolPackage
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
               res = await createToolPackage(formData.value)
               break
             case 'update':
               res = await updateToolPackage(formData.value)
               break
             default:
               res = await createToolPackage(formData.value)
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

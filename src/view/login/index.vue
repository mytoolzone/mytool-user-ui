<template>
  <div class="loginCcontainer">
    <iframe
      src="https://tools.mytool.zone/iframe/star.html"
      width="100%"
      height="100%"
    />
    <div class="loginConten">
      <div class="loginHeader">
        <div class="headerLeft">
          <a href="/boss/" class="">
            <img src="https://tools.mytool.zone/logo.png" class="loginLogo" />
          </a>
        </div>
        <div class="headerRight">
          <a @click="isRegister=true" class="headerRightLogin shuxian">
            <span>注册</span>
          </a>
          <a href="/" class="headerRightLogin"><span>首页</span> </a>
        </div>
      </div>

      <div class="login_panel_form">
        <div class="sign-header">欢迎回来</div>
        <el-form
          ref="loginForm"
          :model="loginFormData"
          :rules="rules"
          :validate-on-rule-change="false"
          @keyup.enter="submitForm"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginFormData.username"
              size="large"
              placeholder="请输入用户名"
              suffix-icon="user"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginFormData.password"
              show-password
              size="large"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item
            v-if="isRegister"
            prop="confirmPassword"
          >
            <el-input
              v-model="loginFormData.confirmPassword"
              show-password
              size="large"
              type="confirmPassword"
              placeholder="请确认密码"
            />
          </el-form-item>
          <el-form-item prop="captcha">
            <div class="vPicBox">
              <el-input
                v-model="loginFormData.captcha"
                placeholder="请输入验证码"
                size="large"
                style="flex: 1; padding-right: 20px"
              />
              <div class="vPic" title="点击刷新">
                <img
                  v-if="picPath"
                  :src="picPath"
                  style="width:100px"
                  alt="请输入验证码"
                  @click="loginVerify()"
                />
              </div>
            </div>
          </el-form-item>

          <el-form-item>
            <el-checkbox id="check1" v-model="checked" />
            <label for="check1" class="information">记住我的登录信息</label>
          </el-form-item>
          <el-form-item>
            <el-button
              v-if="isRegister"
              type="primary"
              style="width: 100%"
              size="large"
              @click="register"
            >
              注册
            </el-button>
            <el-button
              v-if="!isRegister"
              type="primary"
              size="large"
              style="width: 100%;"
              @click="submitForm"
            >
              登 录
            </el-button>
          </el-form-item>
          <el-form-item class="mb10">
            <el-link  v-if="!isRegister" :underline="false" class="mr10" @click="isRegister = true">没有账号注册</el-link>
            <el-link  v-if="isRegister" :underline="false" class="mr10" @click="isRegister = false">跳到登陆</el-link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-link :underline="false">找回密码</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { captcha ,registerUser} from '@/api/user'
import { checkDB } from '@/api/initdb'

import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/pinia/modules/user'

const router = useRouter()
// 验证函数
const checkUsername = (rule, value, callback) => {
  if (value.length < 5) {
    return callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}
const checkPassword = (rule, value, callback) => {
  if (value.length < 6) {
    return callback(new Error('请输入正确的密码'))
  } else {
    callback()
  }
}

// 获取验证码
const loginVerify = () => {
  captcha({}).then(async (ele) => {
    rules.captcha.push({
      max: ele.data.captchaLength,
      min: ele.data.captchaLength,
      message: `请输入${ele.data.captchaLength}位验证码`,
      trigger: 'blur'
    })
    picPath.value = ele.data.picPath
    loginFormData.captchaId = ele.data.captchaId
    loginFormData.openCaptcha = ele.data.openCaptcha
  })
}
loginVerify()

// 登录相关操作
const loginForm = ref(null)
const picPath = ref('')
const checked = ref(false)
const isRegister = ref(false)

const loginFormData = reactive({
  username: '',
  password: '',
  captcha: '',
  captchaId: '',
  openCaptcha: false,
  confirmPassword: ''
})

const rules = reactive({
  username: [{ validator: checkUsername, trigger: 'blur' }],
  password: [{ validator: checkPassword, trigger: 'blur' }],
  captcha: [
    {
      message: '验证码格式不正确',
      trigger: 'blur'
    }
  ]
})

const userStore = useUserStore()
const login = async () => {
  return await userStore.LoginIn(loginFormData)
}
const submitForm = () => {
  loginForm.value.validate(async (v) => {
    if (v) {
      const flag = await login()
      if (!flag) {
        loginVerify()
      }
    } else {
      ElMessage({
        type: 'error',
        message: '请正确填写登录信息',
        showClose: true
      })
      loginVerify()
      return false
    }
  })
}

// 跳转初始化
const checkInit = async () => {
  loginFormData.isPasswordShow = true
  const res = await checkDB()
  if (res.code === 0) {
    if (res.data?.needInit) {
      userStore.NeedInit()
      router.push({ name: 'Init' })
    } else {
      ElMessage({
        type: 'info',
        message: '已配置数据库信息，无法初始化'
      })
    }
  }
}

const registerApi = async () => {
  return await userStore.LoginIn(loginFormData)
}

const register = async () => {
  console.log('register', loginFormData)
  if(loginFormData.password != loginFormData.confirmPassword) {
        ElMessage({
          type: 'error',
          message: '两次输入的密码不一致',
          showClose: true
        })
    return
  }

  loginForm.value.validate(async (v) => {
    if (v) {
      const resp = await registerUser(loginFormData)
      if (resp.code ===0) {
        ElMessage({
          type: 'success',
          message: '注册成功, 请登陆',
          showClose: true
        })
        isRegister.value = false
        return
      }else{
        ElMessage({
          type: 'error',
          message: resp.msg,
          showClose: true
        })
      }
    } else {
      ElMessage({
        type: 'error',
        message: '请正确填写注册信息',
        showClose: true
      })
      return false
    }
  })
}



</script>
<style scoped lang="scss">
.loginCcontainer {
  height: 100vh;
}
.loginConten {
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;

  .loginHeader {
    margin: 0 auto;
    width: 1120px;
    height: 100px;
    .headerLeft {
      float: left;
      min-width: 310px;
      .loginLogo {
        float: left;
        width: 120px;
        margin-top: 14px;
        cursor: pointer;
      }
    }
    .headerRight {
      float: right;
      width: 200px;
      text-align: right;
      line-height: 100px;
      .shuxian {
        position: relative;
        margin-right: 30px;
      }
      .shuxian::before {
        position: absolute;
        top: 50%;
        transform: translatey(-40%);
        left: 54px;
        content: '';
        width: 1px;
        height: 18px;
        background-color: rgba(216, 216, 216, 1);
      }
      .headerRightLogin {
        color: #fff;
        font-size: 18px;
        font-size: 20px;
      }
    }
  }
}

.login_panel_form {
  background-color: #fff;
  width: 300px;
  margin: 0 auto;
  border-radius: 5px !important;
  padding: 30px 30px 10px !important;
  .sign-header {
    -webkit-font-smoothing: antialiased;
    margin-bottom: 15px;
    font-size: 22px;
    font-weight: 500;
  }
}

.vPic {
  height: 45px;
}
.vPicBox {
  display: flex;
}
.information {
  margin-left: 5px;
}
.mb10 {
  margin-bottom: 10px;
}
mr10 {
  margin-right: 10px;
}
</style>

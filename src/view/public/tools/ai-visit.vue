<template>
  <div class="travel-body" >
    <h2>出行旅游常用安排</h2>
    <div > 
          <el-form>
      <!-- <div class="form-item">
        <label>出发日期：</label>
        <el-date-picker v-model="form.departureDate" type="date" placeholder="请选择出发日期"></el-date-picker>
      </div> -->
      <el-form-item class="form-item" label="出发城市：">
        <el-input v-model="form.departureCity" placeholder="请输入出发城市"></el-input>
      </el-form-item>

      <el-form-item class="form-item" label="到达城市：">
        <el-input v-model="form.arrivalCity" placeholder="请输入到达城市"></el-input>
      </el-form-item>

      <el-form-item class="form-item" label="出游时长：">
        <el-input v-model="form.day" placeholder="请输入你打算玩几天"></el-input>
      </el-form-item>

      <el-form-item class="form-item" label="交通方式：">
        <el-radio-group v-model="form.transportation">
          <el-radio label="飞机">飞机</el-radio>
          <el-radio label="火车">火车</el-radio>
          <el-radio label="汽车">汽车</el-radio>
          <el-radio label="自驾">自驾</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- <div class="form-item">
        <label>备注：</label>
        <el-input v-model="form.remarks" type="textarea" placeholder="请输入备注信息"></el-input>
      </div> -->
      <el-form-item class="form-item">
        <el-button type="primary" @click="submitForm" v-loading.fullscreen.lock="loading">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
     </el-form>
    </div>
    <div style="clear:both">
      <h2>Ai安排结果</h2>
      <div class="pre">
        {{aiAnswer}}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios'
import { ElLoading } from 'element-plus'


export default {
  name: 'TravelForm',
  setup() {
    const form = ref({
      departureDate: '',
      departureTime: '',
      departureCity: '北京',
      arrivalCity: '大理',
      transportation: '火车',
      hotels: [],
      remarks: '',
      day: 2,
      loading :ref(true)
    });
    
    const aiAnswer = ref('')

    const submitForm = () => {
      console.log('submitForm' , form.value);
      let val = form.value
      let input = `请制定有一个从 ${val.departureCity}到${val.arrivalCity}的旅行${val.day}天攻略,使用交通工具为 ${val.transportation},请详细列举每天的行程安排和花费金额包含路费`
      // console.log(input)
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })

      setTimeout(() => {
        loading.close()
      }, 60000)
      axios.get('http://chatai.chatai.1127451475362062.ap-southeast-1.fc.devsapp.net/?q='+input).then(res => {
         console.log('res ', res, res.data.choices[0].message.content )
         if(res.status == 200){
           aiAnswer.value = res.data.choices[0].message.content
           loading.close()
         }
      })
    };

    const resetForm = () => {
      form.value = {
        departureDate: '',
        departureTime: '',
        departureCity: '',
        arrivalCity: '',
        transportation: '',
        hotels: [],
        remarks: '',
      };
    };

    return {
      form,
      submitForm,
      resetForm,
      aiAnswer,
    };
  },
};
</script>

<style scoped>
.travel-body {
  max-width: 800px;
  padding: 15px;
  margin: 0 auto;
  display: block;
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
.pre{
  padding: 15px;
  min-height: 100px;
  border: 1px solid #fff;
  display: block;
  white-space: pre-wrap; 
  word-wrap: break-word; 
}
</style>
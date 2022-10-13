<template>
  <div class="login-box">

    <el-form :model="loginForm" status-icon :rules="rules" ref="loginFormRef" label-width="100px" class="loginForm">
      <h1>后台管理系统</h1>
      <el-form-item label="账号" prop="userName">
        <el-input type="text" v-model="loginForm.userName" autocomplete="off" ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"  ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="sub-btn" type="primary" @click="submitForm(loginFormRef)">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs} from "vue";
import  {InitData} from '../types/login'
import type {FormInstance} from "element-plus";
import {login} from '../http/api'
import {useRouter} from "vue-router";

export default defineComponent({
  setup(){
    // 输入数据绑定
    const data = reactive(new InitData());


    const router = useRouter()

    // 登入限制
      const rules={
      userName:[
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 6, max: 24, message: '长度在6到24之间', trigger: 'blur' }
      ],
          password:[
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 24, message: '长度在6到24之间', trigger: 'blur' }
      ]
    };

    // 登入函数
    const submitForm = (loginFormRef:FormInstance)=>{
      loginFormRef.validate((valid:boolean)=>{
        if(valid){
          // alert('验证通过，发送请求')
          login(data.loginForm).then(res=>{
            console.log(res);
            localStorage.setItem("token",res.data.token)
            router.push('/home')
          })
        }
      })
    }


    return{
      ...toRefs(data),
      rules,
      submitForm,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-box{
  padding-top: 200px;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  .loginForm{
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius:20px ;
    margin: 0 auto;
    .sub-btn{
      width: 65%;
    }
    h1{
      text-align: center;
      margin: 20px 0;
    }
  }
}
</style>
import type {FormInstance} from "element-plus";
import {ref} from "vue";

export interface LoginFormInt{
    userName:string,
    password:string
}

export class InitData{
    loginForm:LoginFormInt = {
        userName:'',
        password:'',
    }
    // 泛型定义
    loginFormRef=ref<FormInstance>()
}


import axios from "axios";
// import { Message } from 'element-ui';
import  {ElMessage} from 'element-plus'

// 枚举
enum  MSGS {
    "操作成功" = 200,
    "密码错误",
    "账号错误",
    "请求异常",
}
// 创建http示例
const  $http = axios.create({
    baseURL:" https://mock.presstime.cn/mock/633f7ddc10c84400773526d7/api",
    timeout:2000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

// 请求拦截
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    if (localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})

$http.interceptors.response.use(res=>{
    const code:number = res.data.code
    if (code!=200){
        ElMessage.error(MSGS[code])
        return Promise.reject(res.data)
    }

    return res.data
},err=>{
    console.log(err);
})

export default $http

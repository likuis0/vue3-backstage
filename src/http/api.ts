import $http from './index'

interface loginData{
    userName:string,
    password:string,
}

// mock
export const login = (data:loginData)=>$http({url:'/login',method:'post',data})

export const orderList = (data:any)=>$http({url:'/orderList',method:'get',data})
export const getRoleList = ()=>$http({url:'/getRoleList',method:'get'})
export const getUserList = ()=>$http({url:'/getUserList',method:'get'})
export const getAuthority = ()=>$http({url:'/getAuthority',method:'get'})
export const getRouter = ()=>$http({url:'/getRouter',method:'get'})
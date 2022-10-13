import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getRouter} from '../http/api'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: ()=> import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/HomeView.vue'),
    redirect:"/order",
    children:[
      {
        path: '/order',
        name: 'Order',
        meta:{
          isShow:true,
          title: "订单列表"
        },
        component: ()=> import('../views/OrderView.vue')
      },
      {
        path: '/userList',
        name: 'UserList',
        meta:{
          isShow:true,
          title:"用户列表",
        },
        component: ()=> import('../views/UserView.vue')
      },
      {
        path: '/roleList',
        name: 'RoleList',
        meta:{
          isShow:true,
          title:"角色列表",
        },
        component: ()=> import('../views/RoleView.vue')
      },
      {
        path: '/authority',
        name: 'Authority',
        meta:{
          isShow:false,
          title:"权限列表",
        },
        component: ()=> import('../views/AuthorityView.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// // 路由拦截
// router.beforeEach(async (to)=>{
//   // 没有登入只能进入登入页面
//   const token:string | null = localStorage.getItem('token')
//   if(!token && to.path !== "/"){
//     return '/'
//   }else if(to.path !== '/login' && token){
//     if(router.getRoutes().length===3) {
//       // 动态添加路由
//       let routerData: any = await getRouter()
//       routerData = routerData.data
//
//       routerData.forEach((v: any) => {
//         const routerObj: RouteRecordRaw = {
//           path: v.name,
//           name: v.name,
//           meta: v.meta,
//           component: () => import(`../views/${v.path}.vue`)
//         }
//         router.addRoute("home", routerObj)
//       })
//       router.replace(to.path)
//     }
//   }else if(to.path === '/login' && token){
//     return '/home'
//   }
// })


export default router

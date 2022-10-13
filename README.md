# 这是一个应用了vue3、typescript、element-plus、axios后台管理系统的前端项目

## 初始化
```
yarn install
```

## 启动项目
```
yarn serve
```

## 打包
```
yarn build
```

## 检查和修复文件
```
yarn lint
```


ps:可以写后端的同学可以自行修改http文件夹中的接口，不会的同学可以使用mock进行测试。


## 接口字段：除了/login是post方法其他的都是get方法

### mock在线
https://mock.presstime.cn/

### /login
```
{
  "code": 200,
  "msg": "登入成功",
  "data": {
    "token": "absagabsagwgahsabgasgajjiojobnwaghinasigjsigino",
    "msg": "登入成功",

    "authority": [{
        "path": "/roleList",
        "name": "RoleList",
        "meta": {
          "title": "商品列表",
          "isShow": true
        },
      },

      {
        "path": "/order",
        "name": "Order",
        "meta": {
          "title": "订单列表",
          "isShow": true
        },
      },

      {
        "path": "/userList",
        "name": "UserList",
        "meta": {
          "title": "角色列表",
          "isShow": true
        },
      },


      {
        "path": "/tautority",
        "name": "Tautority",
        "meta": {
          "title": "权限列表",
          "isShow": true
        },
      },
    ],

  }
}
```

### /orderList
```
{
  "code": 200,
  "msg": '请求成功',
  "data": [{
      "userId": 1,
      "id": 1,
      "title": "habsujgb",
      "body": "wrhawoitgj"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "ajgoijohjapoijp",
      "body": "ihtuwngoihaoiegm"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "qgiahjgiojhuoAS",
      "body": "PJGUHWIOGJ"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 11,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 12,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 13,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 14,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 15,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 16,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 17,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 18,
      "title": "habsujgb",
      "body": "wrhawoitgj"
    },
    {
      "userId": 1,
      "id": 19,
      "title": "ajgoijohjapoijp",
      "body": "ihtuwngoihaoiegm"
    },
    {
      "userId": 1,
      "id": 20,
      "title": "qgiahjgiojhuoAS",
      "body": "PJGUHWIOGJ"
    },
    {
      "userId": 1,
      "id": 21,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 22,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 23,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 24,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 25,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 26,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 27,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 28,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 29,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 30,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 31,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 32,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 33,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 34,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 35,
      "title": "habsujgb",
      "body": "wrhawoitgj"
    },
    {
      "userId": 1,
      "id": 36,
      "title": "ajgoijohjapoijp",
      "body": "ihtuwngoihaoiegm"
    },
    {
      "userId": 1,
      "id": 37,
      "title": "qgiahjgiojhuoAS",
      "body": "PJGUHWIOGJ"
    },
    {
      "userId": 1,
      "id": 38,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 39,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 40,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 41,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 42,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 43,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 44,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 45,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 46,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 47,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 48,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 49,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 50,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 51,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 52,
      "title": "habsujgb",
      "body": "wrhawoitgj"
    },
    {
      "userId": 1,
      "id": 53,
      "title": "ajgoijohjapoijp",
      "body": "ihtuwngoihaoiegm"
    },
    {
      "userId": 1,
      "id": 54,
      "title": "qgiahjgiojhuoAS",
      "body": "PJGUHWIOGJ"
    },
    {
      "userId": 1,
      "id": 55,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 56,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 57,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 58,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 59,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 60,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 61,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 62,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 63,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 64,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 65,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 66,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 67,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 68,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 69,
      "title": "habsujgb",
      "body": "wrhawoitgj"
    },
    {
      "userId": 1,
      "id": 70,
      "title": "ajgoijohjapoijp",
      "body": "ihtuwngoihaoiegm"
    },
    {
      "userId": 1,
      "id": 71,
      "title": "qgiahjgiojhuoAS",
      "body": "PJGUHWIOGJ"
    },
    {
      "userId": 1,
      "id": 72,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 73,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 74,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 75,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 76,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 77,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 78,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 79,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 80,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 81,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 82,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 83,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 84,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 85,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 86,
      "title": "habsujgb",
      "body": "wrhawoitgj"
    },
    {
      "userId": 1,
      "id": 87,
      "title": "ajgoijohjapoijp",
      "body": "ihtuwngoihaoiegm"
    },
    {
      "userId": 1,
      "id": 88,
      "title": "qgiahjgiojhuoAS",
      "body": "PJGUHWIOGJ"
    },
    {
      "userId": 1,
      "id": 89,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 90,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 91,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 92,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 93,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 94,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 95,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 96,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 97,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 98,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 99,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },
    {
      "userId": 1,
      "id": 100,
      "title": "aihgu8hwajgu",
      "body": "dguiahwiogj"
    },

  ]
}
```

### /getRoleList
```
{
  "code": 200,
  "data": [{
      "roleName": "超级管理员",
      "roleId": 1,
      "authority": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    {
      "roleName": "管理员",
      "roleId": 2,
      "authority": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
      "roleName": "业务员",
      "roleId": 3,
      "authority": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      "roleName": "客服",
      "roleId": 4,
      "authority": [1, 2, 3, 4, 5, 6]
    },
    {
      "roleName": "财务",
      "roleId": 5,
      "authority": [1, 2, 3, 4]
    },
  ]
}
```

### /getUserList
```
{
  "code": 200,
  "data": [{
      "id": 1,
      "nikeName": "Likuis",
      "userName": "Likuis",
      "role": [{
        "role": 2,
        "roleName": "管理员"
      }, ]
    },
    {
      "id": 2,
      "nikeName": "林肯",
      "userName": "林肯",
      "role": [{
        "role": 3,
        "roleName": "业务员"
      }, ]
    },
    {
      "id": 3,
      "nikeName": "地鼠",
      "userName": "地鼠",
      "role": [{
        "role": 3,
        "roleName": "业务员"
      }, ]
    },
    {
      "id": 4,
      "nikeName": "周肯",
      "userName": "周肯",
      "role": [{
          "role": 2,
          "roleName": "管理员"
        },


      ]
    },

  ]
}
```

### /getAutority
```
{
  "code": 200,
  "data": [{
      "name": "订单列表",
      "roleId": 1,
      "viewRole": "",
      "roleList": [{
          "name": "订单详细",
          "roleId": 2,
          "viewRole": "",
          "roleList": [{
            "name": "审核",
            "roleId": 3,
          }]
        },
        {
          "name": "查看",
          "roleId": 4
        },
        {
          "name": "删除",
          "roleId": 5
        }
      ]
    },

    {
      "name": "商品列表",
      "roleId": 6,
      "viewRole": "",
      "roleList": [{
          "name": "商品详细",
          "roleId": 7,
          "viewRole": "",
          "roleList": [{
            "name": "修改",
            "roleId": 8,
          }]
        },
        {
          "name": "查看",
          "roleId": 9
        },
        {
          "name": "删除",
          "roleId": 10
        }
      ]
    },
    {
      "name": "用户列表",
      "roleId": 11,
      "viewRole": "",
      "roleList": [{
          "name": "查看",
          "roleId": 12
        },
        {
          "name": "删除",
          "roleId": 13
        }
      ]
    },
    {
      "name": "角色管理",
      "roleId": 14,
      "viewRole": "",
      "roleList": [{
          "name": "角色权限",
          "roleId": 15,
          "viewRole": "",
          "roleList": [{
              "name": "超级管理员",
              "roleId": 16,
            },
            {
              "name": "管理员",
              "roleId": 17,
            },
            {
              "name": "用户",
              "roleId": 18,
            },

          ]
        },
        {
          "name": "新增",
          "roleId": 19
        },
        {
          "name": "修改",
          "roleId": 20
        }
      ]
    },
  ]
}
```

### /getRouter 
```
{
  "code": 200,
  "data": [{
      "path": "OrderView",
      "name": "order",
      "meta": {
        "title": "订单列表",
        "isShow": true,
        "icon": "el-icon-document-copy"
      },
    },
    {
      "path": "UserView",
      "name": "userList",
      "meta": {
        "title": "用户列表",
        "isShow": true,
        "icon": "el-icon-user-solid"
      },
    },
    {
      "path": "RoleView",
      "name": "roleList",
      "meta": {
        "title": "角色列表",
        "isShow": true,
        "icon": "el-icon-s-custom"
      },
    },
    {
      "path": "AuthorityView",
      "name": "authority",
      "meta": {
        "title": "权限列表",
        "isShow": false,
        "icon": "el-icon-view",
        "isHide": true
      },
    },

  ]
}
```

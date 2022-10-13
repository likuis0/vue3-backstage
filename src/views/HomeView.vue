<template>
  <div class="common-layout">
    <el-container>

      <el-header height="80px">
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="../assets/logo.png" alt="图标" class="logo">
          </el-col>
          <el-col :span="16"><h2>后台管理系统</h2></el-col>
          <el-col :span="4" class="btn-button"><el-button type="text">likuis</el-button></el-col>
        </el-row>
      </el-header>

      <el-container>

        <el-aside width="200px">
          <el-menu
              router
            default-active="1"
          >
            <el-menu-item v-for="i in list" :key="i.path" :index="i.path">
              <el-icon><icon-menu /></el-icon>
              <span>{{i.meta.title}}</span>
            </el-menu-item>

          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRouter} from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },

  setup(){
    const router = useRouter()
    const list = router.getRoutes().filter(v=>v.meta.isShow)
    console.log(list)

    return {
      list
    }
  }
});
</script>

<style lang="scss" scoped>
  .logo{
    height: 80px;
  }
  h2{
    text-align: center;
    color: #fff;
    line-height: 80px;
    height: 80px;
  }
  .el-header{
    background-color: #545c64;
  }
  .btn-button{
    text-align: right;
    line-height: 80px;
    height: 80px;
    .el-button{
      color: #fff;
    }
  }
  .el-aside{
    .el-menu{
      width: 200px;
      height: calc(100vh - 80px);
      //background-color:#545c64;
      text-align: center;
    }
  }
  .el-main{
    height: calc(100vh - 80px);
    overflow-y: auto;
  }
</style>
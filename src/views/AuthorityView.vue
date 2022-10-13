<template>
  <el-button type="primary" @click="onSubmit">确认修改</el-button>
<div>
  <!--      :check-strictly = "true"-->
  <el-tree
      ref="treeRef"
      :data="list"
      show-checkbox
      node-key="roleId"
      :default-checked-keys="authorityIds"
      :props="{
         children: 'roleList',
         label: 'name',
      }"
  />
</div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import  {useRoute} from 'vue-router'
import {QueryInt,InitData} from'../types/authority'
import {getAuthority} from '../http/api'

export default defineComponent({
  setup(){
    const route = useRoute()
    console.log(route)
    const query:any = route.query

    const data = reactive(new InitData(query.id,query.authority))
    onMounted(()=>{
      getAuthority().then(res=>{
        data.list = res.data
        console.log(data.authorityIds)
      })
    })

    const onSubmit = ()=>{
      console.log(data.treeRef.getCheckedKeys())
      alert("http请求提交")
    }


    return{
      ...toRefs(data),
    onSubmit
    }
  }
})
</script>

<style scoped>

</style>
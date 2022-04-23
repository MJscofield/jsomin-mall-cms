<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { type } from 'os'
import { defineComponent, PropType } from 'vue'
import IBreadcrumb from '../types'
export default defineComponent({
  setup() {
    props: {
      breadcrumbs:{
        type: Array as PropType<IBreadcrumb[]>,
      }
    }
    return {}
  }
})
</script>
<style scoped></style>

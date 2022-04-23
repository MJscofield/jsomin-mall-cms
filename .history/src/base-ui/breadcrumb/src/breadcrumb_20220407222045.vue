<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IBreadcrumb from '../types'
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped></style>

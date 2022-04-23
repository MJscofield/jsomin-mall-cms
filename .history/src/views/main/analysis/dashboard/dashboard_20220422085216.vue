<template>
  <div class="dashboard">
    <el-row:span="24">
      <el-col :span="7">
        <el-card >123</el-card>
        <el-card :span="10">123</el-card>
        <el-card :span="7">123</el-card>
      </el-col>
    </el-row:span=>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
import { useStore } from '@/store'
import ElCard from '@/base-ui/card'

export default defineComponent({
  name: 'dashboard',
  components: {
    ElCard
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction', {})
    return {}
  }
})
</script>

<style scoped></style>

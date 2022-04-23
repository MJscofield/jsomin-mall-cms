<template>
  <div class="dashboard">
    <el-row :span="24">
      <el-col :span="7">
        <hy-card>123</hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card>123</hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card>123</hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
import { useStore } from '@/store'
import hyCard from '@/base-ui/card'

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

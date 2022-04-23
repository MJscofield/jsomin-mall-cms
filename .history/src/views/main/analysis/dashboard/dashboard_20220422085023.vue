<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="24">
        <el-card :span="7">123</el-card>
        <el-card :span="10">123</el-card>
        <el-card :span="7">123</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
import { useStore } from '@/store'
import ElCard from '@/base-ui/card'
import { ElRow } from 'element-plus'

export default defineComponent({
  name: 'dashboard',
  components: {
    ElCard,
    ElRow
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction', {})
    return {}
  }
})
</script>

<style scoped></style>

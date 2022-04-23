<template>
  <div class="dashboard">
    <el-row :span="24" :gutter="20">
      <el-col :xs="7" :sm="7" :md="4" :lg="3" :xl="1">
        <hy-card title="分类商品数量(饼图)">123</hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">123</hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">123</hy-card>
      </el-col>
    </el-row>
    <el-row :span="24">
      <el-col :span="12">
        <hy-card title="分类商品的销量">123</hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏">123</hy-card>
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
    hyCard
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction', {})
    return {}
  }
})
</script>

<style scoped></style>

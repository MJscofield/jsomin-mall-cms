<template>
  <div class="dashboard">
    <el-row :span="24" :gutter="20">
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <hy-card title="分类商品数量(饼图)">123</hy-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <hy-card title="不同城市商品销量">123</hy-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <hy-card title="分类商品数量(玫瑰图)">123</hy-card>
      </el-col>
    </el-row>
    <el-row class="content-row" :gutter="20"
      ><el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <hy-card title="分类商品的销量">123</hy-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <hy-card title="分类商品的收藏">123</hy-card>
      </el-col></el-row
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useStore } from '@/store'
import hyCard from '@/base-ui/card'
import baseEchart from '@/base-ui/echart'

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

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>

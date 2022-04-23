<template>
  <div class="dashboard">
    <el-row :span="24" :gutter="20">
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <hy-card title="不同城市商品销量">123</hy-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>
    <el-row class="content-row" :gutter="20"
      ><el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <hy-card title="分类商品的销量">
          <line-echart></line-echart>
        </hy-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <hy-card title="分类商品的收藏">123</hy-card>
      </el-col></el-row
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useStore } from '@/store'

import hyCard from '@/base-ui/card'
import { pieEchart, roseEchart, lineEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    hyCard,
    pieEchart,
    roseEchart,
    lineEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction', {})
    const categoryGoodsCount = computed(() => {
      return store.state.analysis.categoryGoodsCount.map((item: any) => {
        return {
          name: item.name,
          value: item.goodsCount
        }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.analysis.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
    })
    return {
      categoryGoodsCount,
      pieEchart,
      roseEchart,
      lineEchart
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>

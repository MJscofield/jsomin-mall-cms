<template>
  <div class="dashboard">
    <div>
      <el-card>123</el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
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

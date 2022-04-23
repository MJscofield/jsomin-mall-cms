<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '500px', height: '400px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLDivElement>()
    onMounted(() => {
      const myChart = echarts.init(divRef.value!)
    })
    return {}
  }
})
</script>

<style scoped></style>

<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '500px', height: '400px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useStore } from '@/store'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboard/get')
    return {}
  }
})
</script>

<style scoped></style>

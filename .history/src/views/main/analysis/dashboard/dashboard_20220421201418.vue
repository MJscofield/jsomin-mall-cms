<template>
  <div class="dashboard">
    <div ref="divRef" :style="width:500px; height:400px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

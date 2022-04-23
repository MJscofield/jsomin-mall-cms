<template>
  <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, ref, onMounted } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

const props = withDefaults(
  defineProps<{
    option: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '300px'
  }
)
const echartDivRef = ref<HTMLElement>()
const { setOptions } = useEchart(echartDivRef.value)
onMounted(() => {})
</script>
<style scoped></style>

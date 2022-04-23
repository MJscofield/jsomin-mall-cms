<template>
  <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, ref, onMounted } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '300px'
  }
)
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)

  setOptions(props.options)
})
</script>
<style scoped></style>

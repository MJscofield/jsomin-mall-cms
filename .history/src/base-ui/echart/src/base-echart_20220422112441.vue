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
const { echartInstance, setOptions} from useEchart(echartDivRef.value)
onMounted(() => {
  const echartInstance = echarts.init(echartDivRef.value!)
  echartInstance.setOption(props.option)
})
</script>
<style scoped></style>

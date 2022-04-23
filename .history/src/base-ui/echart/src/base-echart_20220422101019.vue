<template>
  <div ref="echartDivRef"></div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, ref } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
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
</script>
<style scoped></style>

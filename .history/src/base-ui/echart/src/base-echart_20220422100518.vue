<template>
  <div></div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
import { EChartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    option: EChartsOption
    width?: string
    height?: string
  }>
)
</script>
<style scoped></style>

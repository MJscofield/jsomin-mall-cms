<template>
  <div></div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults}
import { EchartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    option: EchartsOption
    width?: string
    height?: string
  }>()
)
</script>
<style scoped></style>

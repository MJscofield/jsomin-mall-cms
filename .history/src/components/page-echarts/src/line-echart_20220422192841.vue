<template>
  <div class="line-echart">
    <baseEchart></baseEchart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/echart'
import { IDataType } from '@/components/page-echarts/src/types'
const props = defineProps<{
  lineData: any[]
}>()
</script>
<style scoped></style>

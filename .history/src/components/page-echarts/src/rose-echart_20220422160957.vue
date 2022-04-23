<template>
  <div class="rose-echart">
    <base-echart></base-echart>
  </div>
</template>

<script lang="ts" setup>
import baseEchart from '@/base-ui/echart'
import { defineProps } from 'vue'
import { IDataType } from '../types'
const props = defineProps<{
  roseData: IDataType[]
}>()
const options = computed(() => {
  return {}
})
</script>
<style scoped></style>

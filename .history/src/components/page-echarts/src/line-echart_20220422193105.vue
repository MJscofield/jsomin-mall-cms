<template>
  <div class="line-echart">
    <baseEchart></baseEchart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/echart'

const props = defineProps<{
  title: string
  xLabel: string[]
  values: any
}>()
const options = computed(() => {})
</script>
<style scoped></style>

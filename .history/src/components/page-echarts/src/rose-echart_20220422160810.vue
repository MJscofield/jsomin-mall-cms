<template>
  <div class="rose-echart">
    <base-echart></base-echart>
  </div>
</template>

<script lang="ts" setup>
import baseEchart from '@/base-ui/echart'
import { defineProps } from 'vue'
const props = defineProps<>{
  roseData: []
}()
</script>
<style scoped></style>

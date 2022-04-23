<template>
  <div class="goods">
    <pageContent></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'goods',
  components: {
    pageContent
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

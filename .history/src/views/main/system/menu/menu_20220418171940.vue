<template>
  <div class="menu">
    <PageContent :contentTableConfig="contentTableConfig" /></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'


export default defineComponent({
  name: 'hy-menu',
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>

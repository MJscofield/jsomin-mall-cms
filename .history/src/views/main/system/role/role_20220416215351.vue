<template>
  <div class="role">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <PageContent :contentTableConfig="contentTableConfig" pageName="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'role',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>

<template>
  <div class="role">
    <PageContent />
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
    return {}
  }
})
</script>

<style scoped></style>

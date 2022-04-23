<template>
  <div class="role">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <PageContent :contentTableConfig="contentTableConfig" pageName="role" />
    </div>
    <div class="modal">
      <PageModal></PageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { modalConfigRef } from './'
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig,
      PageSearch
    }
  }
})
</script>

<style scoped></style>

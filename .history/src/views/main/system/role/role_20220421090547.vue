<template>
  <div class="role">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <PageContent
        :contentTableConfig="contentTableConfig"
        pageName="role"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      />
    </div>
    <div class="modal">
      <PageModal
        ref="PageModalRef"
        :modalConfig="modalConfig"
        :defaultInfo="defaultInfo"
        pageName="role"
      ></PageModal>
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

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [defaultInfo, handleNewData, handleEditData, pageModalRef] =
      usePageModal()
    return {
      contentTableConfig,
      searchFormConfig,
      PageSearch,

      modalConfig,
      defaultInfo,
      handleNewData,
      handleEditData,
      pageModalRef
    }
  }
})
</script>

<style scoped></style>

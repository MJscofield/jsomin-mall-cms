<template>
  <div class="role">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <pageContent
        :contentTableConfig="contentTableConfig"
        pageName="role"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      />
    </div>
    <div class="modal">
      <pageModal
        ref="pageModalRef"
        :modalConfig="modalConfig"
        :defaultInfo="defaultInfo"
        pageName="role"
        >123123132</pageModal
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import pageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    pageContent,
    pageSearch,
    pageModal
  },
  setup() {
    const [defaultInfo, handleNewData, handleEditData, pageModalRef] =
      usePageModal()
    return {
      contentTableConfig,
      searchFormConfig,

      modalConfig,
      defaultInfo,
      handleNewData,
      handleEditData,
      pageModalRef
    }
  }
})
</script>

<style scoped>
.modal {
  margin-left: 35px;
}
</style>

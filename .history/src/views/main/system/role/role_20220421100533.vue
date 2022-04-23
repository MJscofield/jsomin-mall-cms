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
      >
        <div class="menu">
          <el-tree
            :props="{ children: 'children', label: 'name' }"
            :load="loadNode"
            :data="menus"
            lazy
            node-key="id"
            show-checkbox
            @check-change="handleCheckChange"
          />
        </div>
      </pageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

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
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    return {
      contentTableConfig,
      searchFormConfig,

      modalConfig,
      defaultInfo,
      handleNewData,
      handleEditData,
      pageModalRef,
      menus
    }
  }
})
</script>

<style scoped></style>

<template>
  <div class="user">
    <div class="search">
      <pageSearch
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      />
    </div>
    <div class="content">
      <pageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      />
    </div>
    <div class="modal">
      <pageModal
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        :modalConfig="modalConfig"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent,
    pageModal
  },

  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const pageModalRef = ref<InstanceType<typeof pageModal>>()
    const defaultInfo = ref({})
    // 上面typescript这里不是很懂

    const handleNewData = () => {
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
        console.log(pageModalRef)
      }
      console.log(pageContentRef)
      this.$refs
    }
    const handleEditData = (item: any) => {
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
        console.log('改为true' + pageModalRef.value)
      }
      console.log('不存在')
      console.log(pageModalRef)
    }
    return {
      searchFormConfig,
      modalConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less"></style>

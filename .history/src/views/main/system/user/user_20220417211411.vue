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
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    const pageContentRef = ref<InstanceType<typeof pageContent>>()

    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo)
    }
    return {
      searchFormConfig,

      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="less"></style>

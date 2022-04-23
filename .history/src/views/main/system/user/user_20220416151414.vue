<template>
  <div class="user">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <pageContent :contentTableConfig="contentTableConfig" pageName="users" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    return {
      searchFormConfig,

      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less"></style>

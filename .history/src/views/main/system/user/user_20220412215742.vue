<template>
  <div class="user">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import hyTable from '@/base-ui/table'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    hyTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    return {
      searchFormConfig,
      userList,
      userCount,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less">
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>

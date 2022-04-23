<template>
  <div class="user">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch
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
      userCount
    }
  }
})
</script>

<style scoped lang="less"></style>

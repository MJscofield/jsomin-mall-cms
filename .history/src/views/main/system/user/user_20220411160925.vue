<template>
  <div class="user">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch
  },
  setup() {
    const store = useStore()
    store.dispatch('getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>

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

export default defineComponent({
  name: 'user',
  components: {
    pageSearch
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less">
.button {
  text-align: right;
  padding: 0 20px 10px 0;
}
</style>

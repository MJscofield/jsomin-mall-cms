<template>
  <div class="user">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <hyTable />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import hyTable from '@/base-ui/table'

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
    const propList = [
      {
        prop: 'name',
        label: '用户名',
        minWidth: '100',
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100',
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '100',
        prop: 'enable',
        label: '状态',
        minWidth: '100',
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250'
      }
    ]
    return {
      searchFormConfig,
      userList,
      userCount
    }
  }
})
</script>

<style scoped lang="less"></style>

<template>
  <div class="user">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <hy-table :userList="userList" :propList="propList" :title="title">
        <!-- 1. header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary">新建数据</el-button>
        </template>

        <!-- 2. 列中的插槽 -->
        <template #status="scope">
          <el-button
            plain
            size="mini"
            :type="scope.row.enable ? 'success' : 'danger'"
          >
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template #createAt="scope">
          <div>{{ $filter.formatTime(scope.row.createAt) }}</div>
        </template>
        <template #updateAt="scope">
          <div>{{ $filter.formatTime(scope.row.updateAt) }}</div>
        </template>
        <template #handler>
          <div class="handle-btn">
            <el-button type="text" size="mini" icon="el-icon-edit"
              >编辑</el-button
            >
            <el-button type="text" size="mini" icon="el-icon-delete"
              >删除</el-button
            >
          </div>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import hyTable from '@/base-ui/table'
import { contentTableConfig } from './config/content-table'

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
      userCount
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

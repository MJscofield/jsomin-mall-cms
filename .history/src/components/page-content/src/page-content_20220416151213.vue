<template>
  <div class="page-content">
    <hy-table :userList="userList" v-bind="contentTableConfig">
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import hyTable from '@/base-ui/table'
export default defineComponent({
  components: {
    hyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      PageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    return {
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

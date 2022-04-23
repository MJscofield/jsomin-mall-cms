<template>
  <div class="page-content">
    <hy-table
      :dataList="dataList"
      :listCount="listCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1. header中的插槽 -->
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" @click="handleNewClick"
          >新建数据</el-button
        >
      </template>

      <!-- 2. 列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable || scope.row.status ? 'success' : 'danger'"
        >
          {{ scope.row.enable || scope.row.status ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <div>{{ $filter.formatTime(scope.row.createAt) }}</div>
      </template>
      <template #updateAt="scope">
        <div>{{ $filter.formatTime(scope.row.updateAt) }}</div>
      </template>
      <template #handler="scope">
        <div class="handle-btn">
          <el-button
            v-if="isUpdate"
            type="text"
            size="mini"
            icon="el-icon-edit"
            @click="handleEditClick"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            type="text"
            size="mini"
            icon="el-icon-delete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"> </slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import hyTable from '@/base-ui/table'
import { usePermission } from '@/hooks/use.permission'
import { emit } from 'process'

export default defineComponent({
  components: {
    hyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props) {
    // 获取操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    const store = useStore()
    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const listCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    // 获得其他动态插槽的名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'handler') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'createAt') return false
        return true
      }
    )

    // 新建/编辑/删除操作
    const handleDeleteClick = (row: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: row.id
      })
    }

    const handleNewClick = () => {
      emit('newBtnClick')
    }
    return {
      dataList,
      getPageData,
      listCount,
      pageInfo,
      otherPropSlots,
      isDelete,
      isCreate,
      isUpdate,
      handleDeleteClick
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

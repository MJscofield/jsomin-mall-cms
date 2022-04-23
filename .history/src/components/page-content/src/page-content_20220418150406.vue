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
      <template #image="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :fit="fit"
          :preview-src-list="scope.row.imgUrl"
        />
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
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
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
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

    return {
      dataList,
      getPageData,
      listCount,
      pageInfo
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

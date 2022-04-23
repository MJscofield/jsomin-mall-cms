<template>
  <div class="role">
    <div class="search">
      <pageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <pageContent
        :contentTableConfig="contentTableConfig"
        pageName="role"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      />
    </div>
    <div class="modal">
      <pageModal
        ref="pageModalRef"
        :modalConfig="modalConfig"
        :defaultInfo="defaultInfo"
        pageName="role"
        :otherInfo="otherInfo"
      >
        <div class="menu">
          <el-tree
            :props="{ children: 'children', label: 'name' }"
            :data="menus"
            node-key="id"
            show-checkbox
            @check="handleCheckChange"
          />
        </div>
      </pageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'

import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import pageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    pageContent,
    pageSearch,
    pageModal
  },
  setup() {
    // 1.处理pageModal 的hook
    const editCallBack = (item:any)
    const [defaultInfo, handleNewData, handleEditData, pageModalRef] =
      usePageModal(undefined)
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]

      otherInfo.value = { menuList }
    }
    return {
      contentTableConfig,
      searchFormConfig,

      modalConfig,
      defaultInfo,
      handleNewData,
      handleEditData,
      pageModalRef,
      menus,
      handleCheckChange,
      otherInfo
    }
  }
})
</script>

<style scoped>
.menu {
  margin-left: 30px;
}
</style>

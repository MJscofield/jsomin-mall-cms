<template>
  <div class="user">
    <div class="search">
      <pageSearch
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      />
    </div>
    <div class="content">
      <pageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      />
    </div>
    <div class="modal">
      <pageModal
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        :modalConfig="modalConfig"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import { useStore } from '@/store'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent,
    pageModal
  },

  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    // 2. 动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(()={

    })
    const departmentItem = modalConfig.formItems.find(
      (item) => item.field === 'departmentId'
    )
    if (departmentItem) {
      departmentItem.options = store.state.entireDepartment.map((item) => {
        return {
          label: item.name,
          value: item.id
        }
      })
    }
    const roleItem = modalConfig.formItems.find(
      (item) => item.field === 'roleId'
    )
    if (roleItem) {
      roleItem.options = store.state.entireRole.map((item) => {
        return {
          label: item.name,
          value: item.id
        }
      })
    }

    const [defaultInfo, handleNewData, handleEditData, pageModalRef] =
      usePageModal(newCallback, editCallback)
    return {
      searchFormConfig,
      modalConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      handleNewData,
      handleEditData,
      defaultInfo,
      pageModalRef
    }
  }
})
</script>

<style scoped lang="less"></style>

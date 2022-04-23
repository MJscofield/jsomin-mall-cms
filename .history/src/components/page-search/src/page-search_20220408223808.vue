<template>
  <div class="page-search">
    <hy-form :formItems="searchFormConfig" :formData="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="button">
          <el-button type="" class="reset" icon="el-icon-delete"
            >重置</el-button
          >
          <el-button type="primary" class="search" icon="el-icon-search"
            >查询</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import hyForm from '@/base-ui/form'

export default defineComponent({
  components: {
    hyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = reactive({
      username: '',
      realName: '',
      phone: '',
      status: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>
<style scoped></style>

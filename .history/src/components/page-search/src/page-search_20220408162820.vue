<template>
  <div class="page-search">
    <hy-form :formItems="formItems" :formData="formData">
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
import { defineComponent } from 'vue'
import hyForm, { IFormItem } from '@/base-ui/form'
export default defineComponent({
  components: {
    hyForm
  },
  setup() {
    return {}
  }
})
</script>
<style scoped></style>

<template>
  <div class="page-search">
    <hy-form :formItems="searchFormConfig.formItems" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="button">
          <el-button
            class="reset"
            icon="el-icon-refresh"
            @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            class="search"
            icon="el-icon-search"
            @click="handleQueryClick"
            >查询</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emits }) {
    // 双向绑定的值应该是由配置文件中的field来决定的
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}

    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
    }
    return {
      formData,
      handleResetClick
    }
  }
})
</script>
<style scoped>
.button {
  text-align: right;
  padding: 0 20px 10px 0;
}
</style>

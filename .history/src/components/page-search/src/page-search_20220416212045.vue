<template>
  <div class="page-search">
    <hy-form :formItems="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="button">
          <el-button class="reset" icon="el-icon-delete">重置</el-button>
          <el-button type="primary" class="search" icon="el-icon-search"
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
  setup(props) {
    // 双向绑定的值应该是由配置文件中的field来决定的
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    console.log(formItems)
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    return {
      formData
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

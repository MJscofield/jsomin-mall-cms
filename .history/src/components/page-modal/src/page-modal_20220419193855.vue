<template>
  <div class="page-dialog">
    <el-dialog v-model="centerDialogVisible" title="" width="30%" center>
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import hyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    hyForm
  },
  setup(props) {
    const centerDialogVisible = ref(true)
    const formData = ref({})
    watch(() => props.defaultInfo)
    return {
      centerDialogVisible,
      formData
    }
  }
})
</script>
<style scoped></style>

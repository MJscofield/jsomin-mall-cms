<template>
  <div class="page-dialog">
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
      <hy-form></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import hyForm from '@/base-ui/table'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    hyForm
  },
  setup(props) {
    return {}
  }
})
</script>
<style scoped></style>

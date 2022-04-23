<template>
  <div class="page-dialog">
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
      <hy-table></hy-table>
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
import hyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    hyTable
  },
  setup() {
    return {}
  }
})
</script>
<style scoped></style>

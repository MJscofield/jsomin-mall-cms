<template>
  <div class="hy-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    props: {
      tableData: {
        type: Array,
        required: true
      }
    }
    return {}
  }
})
</script>
<style scoped></style>

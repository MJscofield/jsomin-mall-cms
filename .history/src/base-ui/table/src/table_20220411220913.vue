<template>
  <div class="hy-table">
    <el-table :data="propList" style="width: 100%">
      <template>
        <el-table-column prop="date" label="Date" width="180" />
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped></style>

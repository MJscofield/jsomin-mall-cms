<template>
  <div class="hy-table">
    <el-table :data="userList" border style="width: 100%">
      <el-table-column type="index" width="50" />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center"> </el-table-column>
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
    },
    userList: {
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

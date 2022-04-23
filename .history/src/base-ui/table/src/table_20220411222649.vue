<template>
  <div class="hy-table">
    <el-table :data="userList" style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" />
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

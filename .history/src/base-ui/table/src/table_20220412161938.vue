<template>
  <div class="hy-table">
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>

    <el-table
      :data="userList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50" align="center" label="序号" />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          v-bind="propItem"
          align="center"
          min-width="propItem.minWidth"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '用户列表'
    },
    propList: {
      type: Array,
      required: true
    },
    userList: {
      type: Array,
      required: true
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (val: any) => {
      emit('selectionChange', val)
    }
    return {
      handleSelectionChange
    }
  }
})
</script>
<style scoped></style>

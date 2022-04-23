<template>
  <div class="hy-table">
    <el-table :data="propList" style="width: 100%">
      <template v-for="prop in propList" :key="prop.prop">
        <el-table-column :prop="prop.prop" :label="prop.label" :width="prop" />
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

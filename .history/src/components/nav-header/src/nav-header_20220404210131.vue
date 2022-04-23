<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  .fold-menu {
    font-size: 12px;
    cursor: pointer;
  }
}
</style>

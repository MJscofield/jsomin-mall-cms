<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
      style="font-size=30px"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <div>个人信息</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['fold-click'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('fold-click', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  .fold-menu {
    cursor: pointer;
    font-size: 16px;
  }

  .content {
    justify-content: space-between;
    flex: 1;
  }
}
</style>

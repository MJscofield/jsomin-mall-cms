<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <HyBreadcrumb />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui'
export default defineComponent({
  components: {
    UserInfo
  },
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
  width: 100%;
  .fold-menu {
    cursor: pointer;
    font-size: 30px !important;
    top: 5px;
  }

  .content {
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
}
</style>

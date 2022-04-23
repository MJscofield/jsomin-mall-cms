<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <HyBreadcrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumb } from '@/utils/mapMenu'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    UserInfo,
    HyBreadcrumb
  },
  emits: ['fold-click'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('fold-click', isFold.value)
    }
    const store = useStore()
    const route = useRoute()
    const userMenus = computed(() => store.state.login.userMenus)
    const currentPath = route.path
    // 定义面包屑的数据
    const breadcrumbs: IBreadcrumb[] = pathMapBreadcrumb(userMenus, currentPath)
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
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

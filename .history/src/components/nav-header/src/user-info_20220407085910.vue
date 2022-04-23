<template>
  <div class="user-info">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-avatar
          class="el-avatar"
          size="medium "
          src="http://p3.itc.cn/images01/20201021/3b2af3a80f984643af95a8170657a7ef.png"
        />{{ userInfo }}<i class="el-icon-arrow-down"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-info">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-remove">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
export default defineComponent({
  setup() {
    const store = useStore()
    const userInfo = computed(() => store.state.login.userInfo.name)
    return {
      userInfo
    }
  }
})
</script>
<style scoped lang="less">
.user-info {
  cursor: pointer;
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
}
.user-info:hover {
  .el-dropdown-link {
    color: #409eff !important;
  }
}
.el-avatar > img {
  transform: translateX(-8px);
}
</style>

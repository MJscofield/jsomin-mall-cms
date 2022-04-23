<template>
  <div class="user-info">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        个人信息<i class="el-icon-arrow-down"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-info">个人中心</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-remove">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'
export default defineComponent({
  setup() {
    const store = useStore()

    return {}
  }
})
</script>
<style scoped lang="less">
.user-info {
  cursor: pointer;
}
.user-info:hover {
  .el-dropdown-link {
    color: #409eff !important;
  }
}
</style>

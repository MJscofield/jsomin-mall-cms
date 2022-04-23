<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="el-icon-user">
            <span>用户登录</span>
          </span>
        </template>
        用户登录
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="el-icon-phone">
            <span>手机登录</span>
          </span>
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup></script>
<style>
.login-panel {
  width: 320px;
}
</style>

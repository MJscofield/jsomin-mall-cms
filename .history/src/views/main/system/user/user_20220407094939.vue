<template>
  <div class="user">
    <div class="search">
      <el-form label-width="100px" span="24">
        <el-row>
          <el-col>
            <el-form-item
              label="用户名"
              xs="24"
              :sm="12"
              :md="12"
              :lg="8"
              :xl="8"
            >
              <el-input> </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="真实姓名">
          <el-input> </el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input> </el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input> </el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input> </el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

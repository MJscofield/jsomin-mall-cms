<template>
  <div class="hy-form">
    <el-form label-width="100px" span="24">
      <el-row class="el-row">
        <el-col :span="24" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="用户名">
            <el-input> </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="真实姓名">
            <el-input> </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="手机号码">
            <el-input> </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="状态">
            <el-input> </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="创建时间">
            <el-input> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  props: {
    formItems: {
      type: Array,
      default: () => []
    }
  }
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding: 10px 50px;
}
</style>

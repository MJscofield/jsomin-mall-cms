<template>
  <div class="login-account">
    <el-form :model="ruleForm" :rules="rules">
      <el-form-item label="账号" props="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" props="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const ruleForm = reactive({
      name: '',
      password: ''
    })
    const rules = reactive({
      name: [
        {
          required: true,
          message: '请输入账号',
          trigger: blur
        },
        {
          required: true,
          pattern: /^[a-zA-Z0-9]{5-12}$/,
          message: '用户名必须是5到12个数字或字母组成',
          trigger: blur
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: blur
        },
        {
          required: true,
          pattern: /^[a-zA-Z0-9]{5-16}$/,
          message: '密码必须是5到16个数字或字母组成',
          trigger: blur
        }
      ]
    })
    return {
      account,
      rules,
      ruleForm
    }
  }
})
</script>
<style scoped></style>

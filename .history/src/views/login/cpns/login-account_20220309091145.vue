<template>
  <div class="login-account">
    <el-form :rules="rules" v-model="account">
      <el-form-item label="账号" props="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" props="password">
        <el-input v-model="account.password"></el-input>
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
          pattern: /^[a-zA-Z0-9]{5-16}$/,
          message: '密码必须是5到16个数字或字母组成',
          trigger: blur
        }
      ]
    })
    return {
      account,
      rules
    }
  }
})
</script>
<style scoped>
.login-account {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="login-account">
    <el-form>
      <el-form-item label="账号" :rules="rules" v-model="account">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
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
    const rules = {
      name: [
        {
          type: 'Number',
          required: true,
          message: '请输入账号',
          trigger: blur
        },
        {
          pattern: /^[a-zA-Z0-9]{5-12}$/
        }
      ]
    }
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

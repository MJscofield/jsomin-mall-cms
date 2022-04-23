<template>
  <div class="login-account">
    <el-form>
      <el-form-item label="账号">
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
    const rules = {}
    return {
      account
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

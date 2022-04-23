<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LoginAccount } from './login-account.vue'
export default defineComponent({
  component: { LoginAccount },
  setup() {
    return {}
  }
})
</script>
<style scoped>
.title {
  color: rgb(74, 157, 190);
}
</style>

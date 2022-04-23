<template>
  <div class="user">
    <div class="search"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.button {
  text-align: right;
  padding: 0 20px 10px 0;
}
</style>

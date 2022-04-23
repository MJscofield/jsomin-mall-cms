<template>
  <div class="user">
    <div class="search"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'user',
  components: {
    hyForm
  },
  setup() {

    return {
      formItems,
      formData
    }
  }
})
</script>

<style scoped lang="less">
.button {
  text-align: right;
  padding: 0 20px 10px 0;
}
</style>

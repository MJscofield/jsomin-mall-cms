<template>
  <div class="user">
    <div class="search">
      <hy-form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import hyForm from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    hyForm
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>

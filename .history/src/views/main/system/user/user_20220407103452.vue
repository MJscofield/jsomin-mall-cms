<template>
  <div class="user">
    <div class="search">
      <hy-form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import hyForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    hyForm
  },
  setup() {
    const formItems: IFormItem[] = []
    return {}
  }
})
</script>

<style scoped lang="less"></style>

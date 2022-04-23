<template>
  <div class="user">
    <div class="search">
      <hy-form :formItems="formItems" />
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
    const formItems: IFormItem[] = [
      {
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        label: '真实姓名',
        placeholder: '请输入真实姓名'
      },
      {
        label: '手机号码',
        placeholder: '请输入手机号码'
      },
      {
        label: '状态',
        placeholder: '请输入状态'
      },
      {
        label: '创建时间',
        placeholder: '请输入创建时间'
      }
    ]
    return {}
  }
})
</script>

<style scoped lang="less"></style>

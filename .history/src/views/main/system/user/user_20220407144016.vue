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
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'input',
        label: '真实姓名',
        placeholder: '请输入真实姓名'
      },
      {
        type: 'input',
        label: '手机号码',
        placeholder: '请输入手机号码'
      },
      {
        type: 'select',
        label: '状态',
        placeholder: '请输入状态',
        options: [
          {
            label: '正常',
            value: '1'
          },
          {
            label: '禁用',
            value: '0'
          }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请输入创建时间',
        otherOptions: {
          type: 'daterange',

          rangeseparator: 'To',
          startplaceholder: 'Start date',
          endplaceholder: 'End date',
          shortcuts: 'shortcuts'
        }
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped lang="less"></style>

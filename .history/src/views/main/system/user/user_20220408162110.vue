<template>
  <div class="user">
    <div class="search">
      <hy-form :formItems="formItems" :formData="formData">
        <template #header>
          <h2 class="header">高级检索</h2>
        </template>
        <template #footer>
          <div class="button">
            <el-button type="" class="reset">重置</el-button>
            <el-button type="primary" class="search">查询</el-button>
          </div>
        </template>
      </hy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import hyForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    hyForm
  },
  setup() {
    const formData = reactive({
      username: '',
      realName: '',
      phone: '',
      status: '',
      createTime: ''
    })
    const formItems: IFormItem[] = [
      {
        field: 'username',
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        field: 'realName',
        type: 'input',
        label: '真实姓名',
        placeholder: '请输入真实姓名'
      },
      {
        field: 'phone',
        type: 'input',
        label: '手机号码',
        placeholder: '请输入手机号码'
      },
      {
        field: 'status',
        type: 'select',
        label: '状态',
        placeholder: '请选择状态',
        options: [
          {
            label: '开启',
            value: 'true'
          },
          {
            label: '禁用',
            value: 'false'
          }
        ]
      },
      {
        field: 'createTime',
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请输入创建时间',
        otherOptions: {
          type: 'daterange',

          rangeSeparator: '-',
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间'
        }
      }
    ]
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

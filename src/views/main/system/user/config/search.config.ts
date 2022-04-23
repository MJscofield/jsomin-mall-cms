import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
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
      label: '用户状态',
      placeholder: '请选择用户状态',
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
      field: 'createAt',
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
}

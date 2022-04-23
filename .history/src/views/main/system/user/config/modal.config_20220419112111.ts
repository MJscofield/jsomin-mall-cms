import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'username',
      type: 'input',
      label: '用户名',
      required: true,
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
      field: 'password',
      type: 'password',
      label: '密码',
      required: true,
      placeholder: '请输入密码'
    }
  ]
}

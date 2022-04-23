export const rules = {
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: blur
    },
    {
      pattern: /^[a-z0-9]{5,12}$/,
      message: '用户名必须是5到12个数字或字母组成',
      trigger: blur
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: blur
    },
    {
      pattern: /^[a-zA-Z0-9]{5-16}$/,
      message: '密码必须是5到16个数字或字母组成',
      trigger: blur
    }
  ]
}

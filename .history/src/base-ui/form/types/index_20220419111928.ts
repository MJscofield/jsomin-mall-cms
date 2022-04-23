export interface IFormItem {
  field: string
  type: string
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
  required?: boolean
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}

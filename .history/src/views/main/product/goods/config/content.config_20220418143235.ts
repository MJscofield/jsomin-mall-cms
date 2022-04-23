export const contentTableConfig = {
  propList: [
    { prop: 'id', label: '商品id', minWidth: '100' },
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '商品原价', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  title: '用户列表'
}

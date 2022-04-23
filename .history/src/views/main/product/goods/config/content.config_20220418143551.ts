export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '商品原价', minWidth: '80' },
    { prop: 'newPrice', label: '商品现价', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100' },
    { prop: 'status', label: '状态', minWidth: '100' },
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

import { ref } from 'vue'
import pageModal from '@/components/page-modal'
type CallbackFn = (item?: any) => void
export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  // 上面typescript这里不是很懂

  const handleNewData = () => {
    console.log('触发modal')
    console.log(pageModalRef)
    if (pageModalRef.value) {
      defaultInfo.value = {}
      pageModalRef.value.centerDialogVisible = true
      newCb && newCb()
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }

    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
      editCb && editCb(item)
    }
  }
  return [defaultInfo, handleNewData, handleEditData, pageModalRef]
}

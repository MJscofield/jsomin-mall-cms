import { ref } from 'vue'
import pageModal from '@/components/page-modal'
type CallbackFn = () => void
export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  // 上面typescript这里不是很懂

  const handleNewData = () => {
    if (pageModalRef.value) {
      defaultInfo.value = {}
      pageModalRef.value.centerDialogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }

    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
  }
  return [defaultInfo, handleNewData, handleEditData, pageModalRef]
}

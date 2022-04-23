import { ref } from 'vue'
import pageModal from '@/components/page-modal'
export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  // 上面typescript这里不是很懂

  const handleNewData = () => {
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
      console.log(pageModalRef)
    }
    console.log(pageContentRef)
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
      console.log('改为true' + pageModalRef.value)
    }
    console.log('不存在')
    console.log(pageModalRef)
  }
}
return [defaultInfo, handleNewData, handleEditData, pageModalRef]

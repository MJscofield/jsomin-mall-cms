import { ref } from 'vue'
import pageContent from '@/components/page-content'
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    console.log('handleQueryClick触发getPageData')
    console.log('queryInfo')
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}

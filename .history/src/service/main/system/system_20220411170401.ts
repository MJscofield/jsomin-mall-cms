import hyRequest from '@/service'
export function getPageListData(url: string, queryInfo: any) {
  hyRequest.post({
    url: url,
    data: queryInfo
  })
}

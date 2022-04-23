import hyRequest from '../../index'
import { IDataType } from '../../types'
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    data: queryInfo
  })
}

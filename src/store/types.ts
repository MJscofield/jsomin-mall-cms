import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analysis/types'
export interface IRootState {
  name: string
  age: number
  entireRole: any[]
  entireDepartment: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  analysis: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule

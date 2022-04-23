import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getPageListAction({ commit }, payload: any) {}
  }
}

export default systemModule

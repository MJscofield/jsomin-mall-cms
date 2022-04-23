import { createStore, Store, useStore as useVueStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import { IRootState, IStoreType } from './types'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 36,
      entireRole: [],
      entireDepartment: []
    }
  },
  mutations: {},
  getters: {},
  actions: {
    getInitialDataAction({ commit }) {
      // 1. 请求部门和角色数据
      const dataResult = await getPageListData('/system/department/data', {
        offset: 0,
        size: 1000
      })
    }
  },
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVueStore()
}
export default store

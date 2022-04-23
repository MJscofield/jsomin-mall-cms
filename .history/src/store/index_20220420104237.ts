import { createStore, Store, useStore as useVueStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import { IRootState, IStoreType } from './types'

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
    getInitialDataAction({ commit })
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

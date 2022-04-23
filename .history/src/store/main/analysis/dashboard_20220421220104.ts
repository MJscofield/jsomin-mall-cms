import { Module } from 'vuex'
import { IDashboardState } from './types'
import { IRootState } from '@/store/types'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  actions: {
    getDashboardDataAction({ commit, state }, payload: any) {}
  }
}

export default dashboardModule

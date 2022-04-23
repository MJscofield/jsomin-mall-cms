import { Module } from 'vuex'
import { IDashboardState } from './types'
import { IRootState } from '@/store/types'

import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor
} from '@/service/main/analysis/dashboard'
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
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      console.log(categoryCountResult)
    }
  }
}

export default dashboardModule

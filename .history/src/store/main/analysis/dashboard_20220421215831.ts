import { Module } from 'vuex'
import { IDashboardState } from './types'
import { IRootState } from '@/store/types'
const dashboardModule: Module<IDashboardState, IRootState> = {
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  }
}

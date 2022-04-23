import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import LocalCache from '@/utils/cache'
import { useStore } from '@/store'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import router from '@/router'

import { mapMenuToRoutes, mapMenusToPermission } from '@/utils/mapMenu'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenuToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      const permissions = mapMenusToPermission(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)

      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)
      dispatch('getInitialDataAction', null, { root: true })

      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data

      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      const userMenusResult = await requestUserMenusById(userInfo.role.id)
      const userMenus = userMenusResult.data

      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = LocalCache.getCache('token')

      if (token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule

import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import LocalCache from '@/utils/cache'
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
      console.log(permissions)
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult, payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)

      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      const userMenusResult = await requestUserMenusById(userInfo.role.id)
      const userMenus = userMenusResult.data
      console.log(userMenus)
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
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

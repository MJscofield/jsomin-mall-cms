import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.usersList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // console.log(payload.pageUrl)
      // console.log(payload.queryInfo)

      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`
      // 1.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageName)
      console.log(payload)
      const { list, totalCount } = pageResult.data
      const changeName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      switch (pageName) {
        case 'users':
          commit('changeUsersList', list)
          commit('changeUsersCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
      }
    }
  }
}

export default systemModule

import { Module } from 'vuex'
const systemModule: Module<> = {
  state() {
    return {
      userList: [],
      userCount: []
    }
  }
}

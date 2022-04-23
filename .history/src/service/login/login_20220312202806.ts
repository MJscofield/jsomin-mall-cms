import { IAccount, ILoginResult, IDataType } from './type'
import hyRequest from '../index'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = 'role'
}
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + '/menus'
  })
}

import { IAccount, ILoginResult, IDataType } from './type'
import hyRequest from '../index'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/'
}
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoByid(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

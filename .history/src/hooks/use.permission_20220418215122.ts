import { useStore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = Array(store.state.login.permissions)
  const verifyPermission = `system:${pageName}:${handleName}`

  permissions.find((item: any) => {
    console.log(item + '----' + verifyPermission)
    item == verifyPermission
  })

  return
}

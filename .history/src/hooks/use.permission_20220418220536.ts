import { useStore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  for (const item of permissions) {
    if (item == verifyPermission) {
      return true
    } else return false
  }
}
// return permissions.find((item: any) => {
//   console.log(item == verifyPermission)
//   item == verifyPermission
// })

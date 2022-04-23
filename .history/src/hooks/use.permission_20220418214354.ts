import { useStore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = Array(store.state.login.permissions)
  const verifyPermission = `system:${pageName}:${handleName}`
  console.log(typeof verifyPermission)
  console.log(typeof permissions)
  console.log(
    Boolean(
      permissions.find((item: any) => {
        item == verifyPermission
      })
    )
  )
  return
}

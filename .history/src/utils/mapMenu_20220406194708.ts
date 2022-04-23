import { RouteRecordRaw } from 'vue-router'
export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 先加载所有默认的routes
  const allroutes: RouteRecordRaw[] = []
  const routeFiles = require.context('@/')
  return routes
}

import { RouteRecordRaw } from 'vue-router'
export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 先加载所有默认的routes
  const allroutes: RouteRecordRaw[] = []
  const routeFiles = require.context('@/router/main', true, /\.ts/)
  console.log(routeFiles)
  routeFiles.keys().forEach((key) => {
    // @/router/main./.....
    const route = require('../router/main' + key.split('.')[1])
    allroutes.push(route)
    console.log(allroutes)
  })
  return routes
}

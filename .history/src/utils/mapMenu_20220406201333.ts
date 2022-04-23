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
    allroutes.push(route.default)
  })
  console.log(allroutes)

  // 根据菜单获取需要的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allroutes.find((route) => route.path == menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  return routes
}

import { App } from 'vue'
import {}
export default function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    // 时间格式化
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return '2222.22.22'
    }
  }
}

import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    // 时间格式化
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      // return formatUtcString(value)
      return '11111111111111'
    }
  }
}

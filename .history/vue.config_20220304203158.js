import { resolve } from 'path'
export const outputDir = './build'
export function chainWebpack(config) {
  config.resolve.alias
    .set('@', resolve(__dirname, 'src'))
    .set('views', '@/views')
}

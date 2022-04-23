import * as echarts from 'echarts'

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    console.log('resize')
  })
  return {
    echartInstance,
    setOptions
  }
}

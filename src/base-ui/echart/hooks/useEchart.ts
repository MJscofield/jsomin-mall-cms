import * as echarts from 'echarts'
echarts.registerMap('china', require('../data/china.json'))
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  const updateResize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    updateResize
  }
}

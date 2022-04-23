import * as echarts from 'echarts'

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOption = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
    return {
      echartInstance,
      setOption
    }
  }
}

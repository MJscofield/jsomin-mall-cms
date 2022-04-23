<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  },
  components: {
    ElConfigProvider
  },
  setup() {
    return { ElConfigProvider, zhCn }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

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
    return { ElConfigProvider }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>

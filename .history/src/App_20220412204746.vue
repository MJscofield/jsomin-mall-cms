<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {el-config-provider}

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>

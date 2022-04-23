<template>
  <div class="hy-form">
    <el-form label-width="100px" span="24">
      <el-row class="el-row">
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="24" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder"> </el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions"> </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  name: 'user',
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: any,
      default: '100px'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding: 10px 50px;
}
</style>

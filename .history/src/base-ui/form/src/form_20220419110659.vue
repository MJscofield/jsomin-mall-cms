<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header">header</slot>
    </div>
    <el-form :label-width="labelWidth" span="24">
      <el-row class="el-row">
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="24" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                </el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.label"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  name: 'user',
  props: {
    modelValue: {
      type: Object,
      required: true
    },

    // formData: {
    //   type: Object as PropType<any>,
    //   required: true
    // },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue })

    // watch(
    //   formData,
    //   (newValue) => {
    //     console.log(newValue)
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', {
        ...props.modelValue,
        [field]: value
      })
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      // formData
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding: 20px 50px;
}
</style>

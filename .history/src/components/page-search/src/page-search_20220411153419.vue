<template>
  <div class="page-search">
    <hy-form :formItems="searchFormConfig" :formData="formData"> </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import hyForm from '@/base-ui/form'

export default defineComponent({
  components: {
    hyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = reactive({
      username: '',
      realName: '',
      phone: '',
      status: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>
<style scoped></style>

<template>
  <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item label="Account">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.passwd"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup></script>

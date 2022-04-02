<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

let ruleForm = ref({
  username: '',
  password: ''
})
let form = reactive({ruleForm})

const rules = ref({
  username: { required: true, message: '请填写账号', trigger: 'blur' },
  password: { required: true, message: '请填写密码', trigger: 'blur' }
})

function submitForm(formName) {
  console.log(ruleForm.value)
  console.log(form.ruleForm)
  console.log(this.$ref)
  this.$refs[formName].value.validate((valid) => {
    console.log(valid)
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

function resetForm() {
  ruleForm.value.resetFields()
}

</script>
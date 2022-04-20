<template>
  <div>
    <SearchForm
      :form="form"
      :options="options"
      @search="search"
      @clear="clear"
    />
  </div>
</template>

<script setup>
import SearchForm from './components/SearchForm.vue'
import { reactive, ref } from 'vue'

let form = ref({})

let options = reactive([
  {
    type: 'input',
    label: '组织名称',
    placeholder: '请选择管理组织',
    target: 'deptName',
  }, {
    type: 'select',
    label: '组织',
    placeholder: '请选择管理',
    target: 'deptId',
  }
])

defineExpose({
  form,
  options,
})

function search() {
  console.log(form.value)
}

function clear(value) {
  console.log('clear')
  form.value = {}
}

</script>
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
import { reactive } from 'vue'

let form = reactive({})

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

function search(form) {
  console.log(form)
}

function clear() {
  form = {}
  console.log(form)
}

</script>
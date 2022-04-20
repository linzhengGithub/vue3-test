
<template>
    <a-form
      layout="inline"
      :model="form"
    >
    <div>
      <div style="display: flex;margin-bottom: 10px;">
        <a-form-item v-for="(item, index) in options" :key="index" :label="item.label">
          <a-input v-if="item.type === 'input'" v-model:value="form[item.target]" :placeholder="item.placeholder" allow-clear @change="inputChange(item.target)"/>
          <a-input v-if="item.type === 'select'" v-model:value="form[item.target]" :placeholder="item.placeholder" />
        </a-form-item>
      </div>
      <div>
        <a-form-item>
          <a-button v-if="needSearch" type="primary" @click="search()">搜索</a-button>
          <a-button v-if="needClear" style="margin-left: 10px" @click="clear()">清空</a-button>
          <a-button v-if="needExport" style="margin-left: 10px" @click="exportFile()">导出</a-button>
          <a-button v-if="needImport" style="margin-left: 10px" @click="importFile()">导导入</a-button>
        </a-form-item>
      </div>
    </div>
  </a-form>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  form?: any
  options?: [{
    label: string,
    type: string,
    placeholder: string,
    target: string,
  }]
  needSearch?: boolean
  needClear?: boolean
  needExport?: boolean
  needImport?: boolean
}

const props = withDefaults(defineProps<Props>(),{
    form: () => {},
    options: () => [
      {label: '', type: '', placeholder: '', target: ''}
    ],
    needSearch: true,
    needClear: true,
    needExport: false,
    needImport: false
  }
)

const emits = defineEmits(['search', 'clear', 'exportFile', 'importFile'])

function search () {
  emits('search')
}

function clear() {
  emits('clear')
}

function exportFile() {
  emits('exportFile')
}

function importFile() {
  emits('importFile')
}

function inputChange(value) {
  if(props.form[value] === '') {
    delete props.form[value]
  }
}



</script>
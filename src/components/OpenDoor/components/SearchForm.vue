
<template>
    <a-form
      layout="inline"
      :model="form"
    >
    <a-form-item v-for="(item, index) in options" :key="index" :label="item.label">
      <a-input v-if="item.type === 'input'" v-model:value="form[item.target]" :placeholder="item.placeholder" />
      <a-input v-if="item.type === 'select'" v-model:value="form[item.target]" :placeholder="item.placeholder" />
    </a-form-item>
    <a-form-item>
      <a-button v-if="needSearch" type="primary" @click="search()">搜索</a-button>
      <a-button v-if="needClear" style="margin-left: 10px" @click="clear()">清空</a-button>
      <a-button v-if="needExport" style="margin-left: 10px" @click="exportFile()">导出</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { defineProps, getCurrentInstance, onMounted, withDefaults } from 'vue'

const { proxy } = getCurrentInstance()

const props = defineProps({
  form: {
    type: Object,
    default: () => ({}),
  },
  options: {
    type: Array,
    default: () => [],
  },
  needSearch: {
    type: Boolean,
    default: true,
  },
  needClear: {
    type: Boolean,
    default: true,
  },
  needExport: {
    type: Boolean,
    default: false,
  },
})
// const props = withDefaults(defineProps(),{
//     form: {
//       type: Object,
//       default: () => {},
//     },
//     options: {
//       type: Array,
//       default: () => [],
//     },
//     needSearch: {
//       type: Boolean,
//       default: true,
//     },
//     needClear: {
//       type: Boolean,
//       default: true,
//     },
//     needExport: {
//       type: Boolean,
//       default: false,
//     },
//   }
// )

const { form, options, needSearch, needClear, needExport } = props

// const { form } = props

onMounted(() => {
  console.log(form)
  console.log(options)
})

function search () {
    proxy.$emit('search', form)
}

function clear() {
    proxy.$emit('clear', {})
}

function exportFile() {
    proxy.$emit('exportFile')
}



</script>
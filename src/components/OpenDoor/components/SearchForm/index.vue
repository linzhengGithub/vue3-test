
<template>
    <a-form
      layout="inline"
      :model="form"
    >
    <div>
      <div style="display: flex;margin-bottom: 10px;">
      <a-col v-for="(item, index) in options" :key="index" :span="item.span" >
        <a-form-item :label="item.label">
          <a-input
            v-if="isShow('input', item.type)"
            v-model:value="form[item.target]"
            :placeholder="item.placeholder"
            :style="item.defineStyle ?? 'width:200px'"
            allow-clear
            @change="inputChange(item.target)"
          />
          <a-select
            v-if="isShow('select', item.type)"
            v-model:value="form[item.target]"
            :placeholder="item.placeholder"
            :style="item.defineStyle ?? 'width:200px'"
            :options="item.select"
            show-search
            allowClear
            @change="selectChange(item.target)"
          />
          <a-range-picker
            v-if="isShow('daterange', item.type)"
            v-model:value="times"
            :style="item.defineStyle ?? 'width:200px'"
            format="YYYY-MM-DD"
            :placeholder="item.placeholder"
            allowClear
            @change="daterangeChange"
          />
          <a-tree-select
            v-if="isShow('treeSelect', item.type)"
            v-model:value="form[item.target]"
            show-search
            :style="item.defineStyle ?? 'width:200px'"
            :dropdown-style="{ overflow: 'auto' }"
            :listHeight="item.height"
            :placeholder="item.placeholder"
            allow-clear
            tree-default-expand-all
            :tree-data="item.treeData"
            :field-names="item.treeNode"
            @change="treeSelectChange(item.target)"
          />
          <a-cascader
            v-if="isShow('cascader', item.type)"
            v-model:value="form[item.target] as []"
            :options="item.cascader"
            :style="item.defineStyle ?? 'width:200px'"
            :placeholder="item.placeholder"
            @change="cascaderChange(item.target)"
          />
        </a-form-item>
      </a-col>
      </div>
      <div>
        <a-form-item>
          <a-button v-if="needAdd" type="primary" @click="add()">新增+</a-button>
          <a-button v-if="needExport" type="primary" style="margin-left: 10px" @click="exportFile()">导出</a-button>
          <a-button v-if="needImport" type="primary" style="margin-left: 10px" @click="importFile()">导入</a-button>
          <a-button v-if="needSearch" type="primary" style="margin-left: 10px" @click="search()">搜索</a-button>
          <a-button v-if="needClear" style="margin-left: 10px" @click="clearSearch()">清空</a-button>
        </a-form-item>
      </div>
    </div>
  </a-form>
</template>

<script setup lang="ts">
import { Dayjs } from 'dayjs'
import { defineProps, withDefaults, ref, reactive } from 'vue'
import { useSearch } from './useSearch'

let form = ref({})

let times = ref([])

interface Props {
  form?: any
  options?: [{
    label: string,
    type: string,
    placeholder?: string,
    target?: any,
    select?: any,
    defineStyle?: string
    height?: number
    treeNode?: () => {
      children: 'children',
      label: 'label',
      key: 'key',
      value: 'value'
    }
    treeData?: Array<any>
    cascader?: Array<any>
    span?: number
  }]
  needSearch?: boolean
  needClear?: boolean
  needExport?: boolean
  needImport?: boolean
  needAdd?: boolean
  dateTarget?: any
}

const props = withDefaults(defineProps<Props>(),{
    form: () => {},
    options: () => [{label: '', type: '', target: '', defineStyle: 'width: 200px;'}],
    needSearch: true,
    needClear: true,
    needAdd: false,
    needExport: false,
    needImport: false,
    dateTarget: () => []
  }
)

const emits = defineEmits(['search', 'clearSearch', 'exportFile', 'importFile', 'add'])
const {
  inputChange,
  selectChange,
  treeSelectChange,
  cascaderChange,
  daterange,
  isShow,
  add,
  search,
  clear,
  exportFile,
  importFile
} = useSearch(form, emits)



// 清空
function clearSearch() {
  times.value = []
  form.value = {}
  clear()
}

// daterange change
function daterangeChange(val: [Dayjs, Dayjs], date: any) {
  const a = props.dateTarget[0]
  const b= props.dateTarget[1]
  daterange(val, a, b, date)
}


</script>
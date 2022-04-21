<template>
  <div>
    <SearchForm
      :form="form"
      :options="options"
      :date-target="['beginTime', 'endTime']"
      need-add
      need-export
      need-import
      @exportFile="exportFile"
      @importFile="importFile"
      @search="search"
      @clearSearch="clear"
    />

    <SecondTable
      :data-source="dataSource"
      :columns="columns"
      :action-columns="actionColumns"
    />
  </div>
</template>

<script setup>
import SearchForm from './components/SearchForm/index.vue'
import SecondTable from './components/SecondTable/index.vue'
import { reactive, ref, defineExpose } from 'vue'


// Search
let form = ref({})
let treeData = ref([{
      name: 'parent 1',
      value: '1',
      children: [
        {
          name: 'parent 1-0',
          value: '1-0',
          children: [
            {
              name: 'my leaf',
              value: '1-0-1',
            },
            {
              name: 'your leaf',
              value: '1-0-2',
            },
          ],
        },
        {
          name: 'parent 1-1',
          value: '1-1',
        },
      ]
}])
let cascaderData = ref([{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
])

let options = reactive([
  {
    type: 'input',
    label: '输入框',
    placeholder: '',
    target: 'inputVal',
  }, {
    type: 'select',
    label: '下拉框',
    placeholder: '',
    target: 'selectVal',
    select: [
      {
        value: 'jack',
        label: 'Jack',
      },{
        value: 'dean',
        label: 'dean',
      }
    ],
    selectStyle: 'width:150px'
  }, {
    type: 'daterange',
    label: '日期选择',
    placeholder: ['', ''],
    target: ['dateFirst', 'dateSecond'],
  }, {
    type: 'treeSelect',
    label: '树组织',
    placeholder: '',
    target: 'treeVal',
    height: 200,
    selectStyle: 'width:150px',
    treeNode: {
      children: 'children',
      label: 'name',
      key: 'key',
      value: 'value'
    },
    treeData: treeData
  }, {
    type: 'cascader',
    label: '级联选择',
    placeholder: '',
    target: 'cascaderVal',
    selectStyle: 'width:150px',
    cascader: cascaderData
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

function importFile() {
  console.log('importFile')
}

function exportFile() {
  console.log('exportFile')
}

// Table

const dataSource = ref([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]
)

const columns = ref([
    {
      title: '开门告警时间',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '隔离地点',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '门磁标识',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '摄像头标识',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '关联的隔离人员',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '告警地点',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '录像开始时间',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '录像结束时间',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
    },
  ]
)

const actionColumns = reactive([
  {
    title: '查看',
    fn: (val) => { console.log(val) }
  },
  {
    title: '编辑',
    fn: (val) => { console.log('编辑') }
  },
  {
    title: '删除',
    danger: true,
    fn: (val) => { console.log('删除') }
  }
])

</script>
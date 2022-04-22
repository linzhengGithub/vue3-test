<template>
  <div>
    <!-- 查询 -->
    <SearchForm
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

    <!-- <SecondTable
      :table-data="tableData"
      :columns-params="columnsParams"
      :action-columns="actionColumns"
    /> -->

    <!-- 表格 -->
    <SecondTable
      :data-source="dataSource"
      :columns="columns"
      :action-columns="actionColumns"
      :total="total"
      :loading="loading"
      :scroll="{ y: `calc(100vh - 700px)` }"
      @pageChange="pageChange"
    />

    <!-- 对话框 -->
    <a-button @click="modal()">modal</a-button>
    <a-button @click="deleteC()">删除</a-button>
    <Modal
      :visible="modalVisible"
      @update:visible="modalVisible = $event"
      :title="'弹窗组件'"
      :okText="'保存'"
      :content-params="[{ params: 'name', label: '姓名:'}, {params: 'age', label: '年龄:' }]"
      :content="{name: 'lin', age: 18}"
      :span-width="12"
      :leftStyle="{'margin-right': '10px'}"
      :rightStyle="{color: '#1890ff'}"
      @showModal="showModal()"
      @handleOk="handleOk"
      @handleCancel="handleCancel"
    />
  </div>
</template>

<script setup>
import SearchForm from './components/SearchForm/index.vue'
import SecondTable from './components/SecondTable/index.vue'
import { reactive, ref, defineExpose } from 'vue'
import axios from 'axios'
import Modal from './components/Modal/index.vue'
import { useModal } from './components/Modal/useModal.js'

const { deleteModal } = useModal()

let loading = ref(false)
let total = ref(0)
let modalVisible = ref(false)

const queryData = params => {
  return axios.get('https://randomuser.me/api?noinfo', {
    params,
  })
}




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
    target: 'inputVal',
    placeholder: ''
  }, {
    type: 'select',
    label: '下拉框',
    target: 'selectVal',
    placeholder: '',
    select: [
      {
        value: 'jack',
        label: 'Jack',
      },{
        value: 'dean',
        label: 'dean',
      }
    ],
  }, {
    type: 'daterange',
    label: '日期选择',
    target: ['dateFirst', 'dateSecond'],
    placeholder: ['', ''],
  }, {
    type: 'treeSelect',
    label: '树组织',
    target: 'treeVal',
    placeholder: '',
    height: 200,
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
    target: 'cascaderVal',
    placeholder: '',
    cascader: cascaderData
  }
])

defineExpose({
  form,
  options,
})

function search(form) {
  console.log(form)
}

function clear(value) {
  form.value = {}
}

function importFile() {
  console.log('importFile')
}

function exportFile() {
  console.log('exportFile')
}

// Table ElementPlus

const columnsParams = [
  {
    prop: 'name',
    label: '姓名',
  },
  {
    prop: 'age',
    label: '年龄',
  },
  {
    prop: 'address',
    label: '地址',
    type: 'defined',
    fn: (val) => {
      return val.date + val.name + val.age
    }
  },
  {
    type: 'action',
    label: '操作',
  }
]

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    age: '28',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  }
]


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
    },{
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
    }
  ]
)

const columns = [
  {
  title: 'Name',
  dataIndex: 'name',
  width: '20%',
  type: 'defined',
  fn: (val) => {
    return val.address + val.name + val.age
  }
}, {
  title: 'age',
  dataIndex: 'age',
  width: '20%',
}, {
  title: 'address',
  dataIndex: 'address',
}, {
  title: '操作',
  dataIndex: 'action',
  type: 'action',
  width: 300
  },
];

function pageChange(val) {
  const { page, pageSize } = val
  loading.value = true
  queryData({page: 1, result: 20}).then((res) => {
    loading.value = false
  })
  total.value = pageSize
}

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
    disableFn: (val) => { return val.age === 32 },
    fn: (val) => { console.log('删除') }
  }
])


// Modal

function modal() {
  showModal()
}

function showModal() {
  modalVisible.value = true
}

function handleOk(val) {
  console.log('ok')
}

function handleCancel() {
  console.log('cancel')
}

// delete Modal

function deleteC() {
  deleteModal('删除提示', () => {console.log('ok')}, () => {console.log('cancel')})
  console.log('deleteConfirm')
}

</script>
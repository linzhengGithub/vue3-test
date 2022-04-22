<template>
  <a-table
    bordered
    :dataSource="dataSource"
    :columns="columns"
    :action-columns="actionColumns"
    :scroll="scroll"
    :loading="loading"
    :pagination="pagination"
  >
    <template #bodyCell="{ column, record  }">
      <!-- 实现table 自定义数据 -->
      <template v-if="column.type === 'action'" >
        <span class="actionBtn" v-for="(item, index) in actionColumns" :key="index">
          <a-button type="primary" :danger="item.danger" :disabled="item.disableFn && item.disableFn(record)" @click="item.fn(record)">{{ item.title }}</a-button>
        </span>
      </template>
      <template v-if="column.type === 'defined'">
        <span>{{ column.fn(record) }}</span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { ref, defineProps, reactive, defineEmits, computed, withDefaults, toRef } from 'vue'

let props = defineProps({
  actionColumns: {type: Array, default: () => []},
  columns: { type: Array, default: () => [] },
  dataSource: { type: Array, default: () => [] },
  scroll: { type: Object, default: () => { return { y: 600 } }},
  total: {type: Number, default: 0},
  loading: {type: Boolean, default: false },
})

const { actionColumns, columns, dataSource, scroll, loading } = props

const total = toRef(props, 'total')

let pagination = reactive({
  current: 1,
  pageSize: 10,
  showSizeChanger: true,
  showQuickJumper: true,
  total: total,
  showTotal: (total, range) => `共 ${total} 条数据`,
  pageSizeOptions: ['10', '20', '30', '40', '100'],
  onShowSizeChange: pageSizeChange,
  onChange: pageChange,
  position:['bottomCenter']
})


const emits = defineEmits(['pageChange', 'pageSizeChange'])

function pageSizeChange(current, pageSize) {
  pagination.pageSize = pageSize
}

function pageChange(page, pageSize) {
  pagination.current = page
  emits('pageChange', {page, pageSize})
}

</script>

<style scope>
.actionBtn {
  margin-right: 10px;
}
</style>
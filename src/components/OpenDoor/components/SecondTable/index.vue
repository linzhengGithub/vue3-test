<template>
  <a-table
    :dataSource="dataSource"
    :columns="columns"
    bordered
    :action-columns="actionColumns"
  >
    <template #bodyCell="{ column, record  }">
      <!-- 实现table 自定义数据 -->
      <template v-if="column.dataIndex === 'action'">
        <span class="actionBtn" v-for="(item, index) in actionColumns" :key="index">
          <a-button type="primary" :danger="item.danger" @click="item.fn(record)">{{ item.title }}</a-button>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { ref, defineProps } from 'vue'

let props = defineProps({
  actionColumns: {type: Array, default: () => []},
  columns: {type: Array, default: () => []},
  dataSource: {type: Array, default: () => []},
})

</script>

<style scope>
.actionBtn {
  margin-right: 10px;
}
</style>
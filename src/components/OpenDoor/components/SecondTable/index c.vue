<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column v-for="(item,index) in columnsParams" :key="index" :prop="item.prop" :label="item.label" :width="item.width">
        <template #default="scope">
          <span v-if="item.type === 'text'">{{ scope.row[item.prop] }}</span>
          <span v-if="item.type === 'action'">
            <el-button v-for="(i,index) in actionColumns" :key="index" size="small" :type="i.type" @click="i.fn(scope.row)">{{ i.title }}</el-button>
          </span>
          <span v-if="item.type === 'defined'">
            {{ item.fn(scope.row) }}
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="search.page"
      v-model:page-size="search.limit"
      :page-sizes="[100, 200, 300, 400]"
      background
      layout="total, prev, pager, next, sizes,  jumper"
      :loading="loading"
      :total="400"
      @size-change="pageSizeChange"
      @current-change="currentChange"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, reactive, defineEmits, computed, withDefaults } from 'vue'

let props = defineProps({
  tableData: {type: Array, default: () => []},
  columnsParams: {type: Array, default: () => []},
  actionColumns: {type: Array, default: () => []},
  search: { type: Object, default: { page: 1, limit: 10 } },
  loading: { type: Boolean, default: false },
})

const { search } = props


const emits = defineEmits(['pageChange', 'pageSizeChange'])

function pageSizeChange(pageSize) {
  console.log(search)
  search.page = pageSize
  console.log(search.page)
  // pagination.pageSize = pageSize
}

function currentChange(current) {
  search.limit = current
  console.log(search.limit)
  // pagination.current = page
  // emits('pageChange', {page, pageSize})
}

</script>

<style scope>
.actionBtn {
  margin-right: 10px;
}
</style>
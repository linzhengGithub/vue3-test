<template>
  <a-modal
    v-model:visible="visible"
    :width="width"
    :title="title"
    :ok-text="okText"
    :cancel-text="cancelText"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form layout="inline" :model="form">
      <a-row>
        <a-col v-for="(item,index) in contentParams" :key="index" :span="spanWidth">
          <a-form-item :label="item.label">
            <a-input
              v-if="isShow('input', item.type)"
              v-model:value="form[item.params]"
              :placeholder="item.placeholder"
              allow-clear
              @change="inputChange(item.target)"
            />
            <a-select
              v-if="isShow('select', item.type)"
              v-model:value="form[item.params]"
              :placeholder="item.placeholder"
              :options="item.select"
              show-search
              allowClear
              @change="selectChange(item.target)"
            />
            <a-tree-select
              v-if="isShow('treeSelect', item.type)"
              v-model:value="form[item.params]"
              show-search
              :dropdown-style="{ overflow: 'auto' }"
              :listHeight="item.height"
              :placeholder="item.placeholder"
              allow-clear
              tree-default-expand-all
              :tree-data="item.treeData"
              :field-names="item.treeNode"
              @change="treeSelectChange(item.params)"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useSearch } from './useSearch'

const emits = defineEmits(['inputChange', 'selectChange', 'daterange', 'treeSelectChange', 'cascaderChange'])
const {
  inputChange,
  selectChange,
  treeSelectChange,
  cascaderChange,
  daterange,
  isShow
} = useSearch(form, emits)

let props = defineProps({
  form: { type: Object, default: () => {} },
  visible: { type: Boolean, default: false },
  width: { type: Number, default: 500 },
  title: { type: String, default: '弹窗' },
  okText: { type: String, default: '确定' },
  cancelText: { type: String, default: '' },
  contentParams: { type: Array, default: () => [] },
  spanWidth: { type: Number, default: 12 },
})

</script>
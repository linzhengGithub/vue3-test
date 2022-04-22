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
    <a-row>
      <a-col v-for="(item,index) in contentParams" :key="index" :span="spanWidth">
        <span :style="leftStyle">{{ item.label }}</span>
        <span :style="rightStyle">{{ content[item.params] }}</span>
      </a-col>
    </a-row>
    <template #footer>
        <a-button v-if="okText" key="back" type="primary" :loading="loading" @click="handleOk">{{ okText }}</a-button>
        <a-button v-if="cancelText" key="submit" @click="handleCancel">{{ cancelText }}</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import { ref, defineProps } from 'vue'

let props = defineProps({
  visible: { type: Boolean, default: false },
  width: { type: Number, default: 500 },
  title: { type: String, default: 'Modal Title' },
  okText: { type: String, default: '确定' },
  cancelText: { type: String, default: '' },
  contentParams: { type: Array, default: () => [] },
  content: { type: Object, default: () => {} },
  spanWidth: { type: Number, default: 12 },
  rightStyle: { type: Object, default: () => {} },
  leftStyle: { type: Object, default: () => {} }
})

const emits = defineEmits(['handleCancel', 'handleOk', 'update:visible', 'update:confirmLoading'])

let loading = ref(false)

function handleOk() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    emits('update:visible', false)
  }, 2000);
  emits('handleOk', false)
}

function handleCancel() {
  emits('update:visible', false)
  emits('handleCancel', false)
}

</script>
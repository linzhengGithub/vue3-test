<template>
  <a-modal v-model:visible="visible" title="批量导入" @cancel="handleCancel" :width="600">
    <div>
      <span>
        请您按“导入模板”文档内的指定字段导入信息。
      </span>
      <a-button type="primary" @click="upFile" style="margin-right: 10px;">选择文件</a-button>
      <a-button @click="downFile" style="margin-right: 10px;">下载导入模板</a-button>
    </div>
    <template #footer>
      <a-button key="submit" @click="handleCancel">关闭</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

let props = defineProps({
  visible: { type: Boolean, default: false },
})

const emits = defineEmits(['update:visible', 'downFile', 'upFile'])

function handleCancel() {
  emits('update:visible', false)
}

function downFile() {
  emits('downFile')
}

function upFile() {
  emits('upFile')
}



</script>
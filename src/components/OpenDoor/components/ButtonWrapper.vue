<template>
  <div>
    <a-button type="primary" html-type="submit" @click="getList()">搜索</a-button>
    <a-button style="margin-left: 10px" @click="clear()">清空</a-button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['getList', 'clear'])

</script>
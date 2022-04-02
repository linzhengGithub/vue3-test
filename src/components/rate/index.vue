<template>
  <div :style="themes">
    <slot/>
    <div class='rate' @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class='hollow' :style="fontWidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, defineProps, defineEmits } from 'vue'

let props = defineProps({
  value: { type: Number },
  theme: { type: String, default: 'orange' }
})

let width = ref(props.value)
let fontWidth = computed(() => `width: ${width.value}em`)


const themeList = {
  'black': '#000', 'white': '#fff', 'red': '#f5222d', 'orange': '#fa541c', 'yellow': '#fadb14', 'green': '#73d13d', 'blue': '#40a9ff'
}

let themes = computed(() => {
  return `color: ${themeList[props.theme]}`
})

function mouseOver(num) {
  width.value = num
}
function mouseOut() {
  width.value = props.value
}
let emits = defineEmits(['update'])
function onRate(num) {
  emits('update', num)
}

</script>

<style scoped>
.rate{
  position:relative;
  display: inline-block;
  cursor: pointer;
  width: 5em;
}
.rate > span.hollow{
  position:absolute;
  display: inline-block;
  top:0;
  left:0;
  width:0;
  overflow:hidden;
}
</style>
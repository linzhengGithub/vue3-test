<template>
  <div>
    <div class="box" :style="{'width': width + 'px'}"/>
    <button @click="change">改变</button>
    <transition name="fade">
      <p v-if="showTitle" style="color: green">改变文字透明度</p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let width = ref(50)
let showTitle = ref(true)
function change() {
  showTitle.value = !showTitle.value
}
</script>

<style scoped>
@keyframes move {
  0% {left:0px}
  50% {left:200px}
  100% {left:0}
}
.box{
  width: 50px;
  height: 50px;
  background-color: red;
  margin-bottom: 10px;
  position: relative;
  /* transition: .25s all; */
  animation: move 2s linear infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
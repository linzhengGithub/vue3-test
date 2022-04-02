<template>
  <div>
    {{ count }} * 2 = {{ double }}<br/>
    <button @click="add">+1</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
// import { useStore } from '../../store/gvuex'
let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)

function add() {
  store.commit('add')
}
function asyncAdd() {
  store.dispatch('asyncAdd')
}

</script>
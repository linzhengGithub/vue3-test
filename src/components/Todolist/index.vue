<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">清空</button>
    <ul v-if="todoList.length">
      <li v-for="(todo, index) in todoList" :key="index">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done: todo.done}">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" :disabled="!todoList.length">
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodos } from './useTodos'

const { title, todoList, addTodo, all, active, allDone, clear } = useTodos()

</script>

<style scoped>
.done{
  text-decoration: line-through
}
</style>

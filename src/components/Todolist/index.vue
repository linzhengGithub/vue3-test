<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">清空</button>
    <ul v-if="todoList.length">
      <transition-group name="todo_list">
        <li v-for="(todo, index) in todoList" :key="index">
          <input type="checkbox" v-model="todo.done">
          <span :class="{done: todo.done}">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, index)">❌</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" :disabled="!todoList.length">
      <span>{{ active }} / {{ all }}</span>
    </div>
    <transition name="model">
      <div v-if="showModel" class="info_wrapper">
        小贼！没有输入内容！
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodos } from './useTodos'

const { title, todoList, addTodo, all, active, allDone, clear, showModel, removeTodo } = useTodos()

</script>


<style lang="scss" scoped>
$padding:10px;
$white:#fff;
ul {
  width: 200px;
  // margin:0 auto;
  padding: 0;
  li {
    &:hover {
      cursor: pointer;
    }
    list-style-type: none;
    margin-bottom: $padding;
    padding: $padding;
    background: $white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
}
.done{
  text-decoration: line-through
}
.info_wrapper{
  position: fixed;
  top: 20px;
  left: 20%;
  padding: 10px;
  opacity: 1;
  background-color: palegreen;
}
.model-enter-active,
.model-leave-active{
  transition: all .3s ease;
}
.model-enter-from,
.model-leave-to{
  opacity: 0;
  transform: translateY(-50px);
}

.todo_list-move{
  transition: transform .8s ease;
}
.todo_list-enter-active,
.todo_list-leave-active{
  transition: transform .25s ease;
}
.todo_list-enter-from,
.todo_list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}

</style>

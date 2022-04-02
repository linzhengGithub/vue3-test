import { ref, Ref, computed, watchEffect } from 'vue'
import { useStorage } from '../../utils/useStorage'

interface Todo {
  title: String,
  done: Boolean
}

export function useTodos() {
  let title = ref('')
  let todoList:Ref<Todo[]> = useStorage('todoList', [{title: '学习Vue3', done: false}])
  let showModel = ref(false)

  function addTodo() {
    if(!title.value) {
      showModel.value = true
      setTimeout(() => {
        showModel.value = false
      },1500)
      return
    }
    todoList.value.push({ title: title.value, done: false })
    title.value = ''
  }
  
  let all = computed(() => todoList.value.length)
  let active = computed(() => {
    return todoList.value.filter(v => !v.done).length
  })
  let allDone = computed({
    get: function () {
      if(!todoList.value.length) return false
      return active.value === 0
    },
    set: function (value: Boolean) {
      todoList.value.forEach(v => v.done = value)
    }
  })
  
  function clear() {
    todoList.value = todoList.value.filter(v => !v.done)
  }
  function removeTodo(e, i) {
    todoList.value.splice(i, 1)
  }
  return { title, todoList, addTodo, all, active, allDone, clear, showModel, removeTodo }
}
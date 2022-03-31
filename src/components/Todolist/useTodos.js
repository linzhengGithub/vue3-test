import { ref, computed, watchEffect } from 'vue'
import { useStorage } from '../../utils/useStorage'

export function useTodos() {
  let title = ref('')
  let todoList = useStorage('todoList', [{title: '学习Vue3', done: false}])

  function addTodo() {
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
    set: function (value) {
      todoList.value.forEach(v => v.done = value)
    }
  })
  
  function clear() {
    todoList.value = todoList.value.filter(v => !v.done)
  }
  return { title, todoList, addTodo, all, active, allDone, clear }
}
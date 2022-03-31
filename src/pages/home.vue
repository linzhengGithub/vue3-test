
<template>
    <div>
        <TodoList />
        <!-- v-on不会告警使用@有告警 -->
        <Rate :value="score" :theme="color" @update="updateRate">评分：</Rate>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from '../components/Todolist/index.vue'
import Rate from '../components/rate/index.vue'
let score = ref(3)
let color = ref('green')

function updateRate(num) {
    score.value = num
}
</script>
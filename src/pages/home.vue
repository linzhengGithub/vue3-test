
<template>
    <div>
        {{x}},{{y}}
        <div>
            <h3>Todolist</h3>
            <TodoList />
        </div>
        <div>
            <h3>Rate</h3>
            <Rate :value="score" :theme="color" @update="updateRate">评分：</Rate>
        </div>
        <div>
            <h3>TransitionBox</h3>
            <TransitionBox />
        </div>
        <div>
            <h3>vuex</h3>
            <Count />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from '../components/Todolist/index.vue'
import Rate from '../components/rate/index.vue'
import TransitionBox from '../components/TransitionBox/index.vue'
import Count from '../components/Count/index.vue'
import { useMouse } from '../utils/mouse'
let score = ref(3)
let color = ref('green')
const { x, y } = useMouse()

function updateRate(num) {
    score.value = num
}
</script>
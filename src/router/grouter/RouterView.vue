<template>
  <component :is="comp" />
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from './index'

let router = useRouter()

let comp = computed(() => {
  const route = router.routes.find(r => 
    r.path === router.current.value
  )
  return route ? route.component : null
})

</script>
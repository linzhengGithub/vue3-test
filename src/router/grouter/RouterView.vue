<template>
  <component :is="comp" />
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from './index'

let router = useRouter()

let comp = computed(() => {
  console.log(router)
  const route = router.routes.find(r => 
    r.path === router.current.value
  )
  console.log(route)
  return route ? route.component : null
})

</script>
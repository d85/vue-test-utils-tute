<template>
  <button @click="handleClick" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props, { emit }) {
    const count = ref(0)

    const handleClick = () => {
      count.value += 1
      emit('count', count.value)
    }

    return {
      handleClick
    }
  }
}
</script>

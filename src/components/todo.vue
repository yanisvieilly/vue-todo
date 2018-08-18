<template lang="pug">
li
  span(:class="{ done: todo.done }") {{ todo.name }}
  input(
    :checked="todo.done"
    type="checkbox"
    @click="changeTodo(todo.id)"
  )
  button(:disabled="todo.readOnly" @click="removeTodo(todo.id)") &times;
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: mapMutations(["changeTodo", "removeTodo"])
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>

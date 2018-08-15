<template>
<li>
  <span :class="{ done: todo.done }">{{todo.name}}</span>
  <input
    type="checkbox"
    :checked="todo.done"
    @click="$emit('change-todo', todo.id)"
  >
  <button :disabled="todo.readOnly" @click="$emit('remove-todo', todo.id)">
    &times;
  </button>
</li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>

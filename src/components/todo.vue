<template>
  <li>
    <span :class="{ done: todo.done }">{{ todo.name }}</span>
    <input
      :checked="todo.done"
      type="checkbox"
      @click="changeTodo(todo.id)"
    >
    <button
      :disabled="todo.readOnly"
      @click="removeTodo(todo.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
import store from "../store";

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeTodo() {
      store.changeTodo(this.todo.id);
    },
    removeTodo() {
      store.removeTodo(this.todo.id);
    }
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>

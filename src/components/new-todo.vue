<template>
  <div>
    <input v-model="newTodo">
    <button @click="addTodoAndClearNewTodo">Add todo</button>
    <button @click="addAsyncTodoAndClearNewTodo">Add async todo</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    ...mapActions(["addAsyncTodo"]),
    addTodoAndClearNewTodo() {
      this.addTodo(this.newTodo);
      this.clearTodo();
    },
    addAsyncTodoAndClearNewTodo() {
      this.addAsyncTodo(this.newTodo);
      this.clearTodo();
    },
    clearTodo() {
      this.newTodo = "";
    }
  }
};
</script>

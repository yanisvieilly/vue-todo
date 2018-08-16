<template>
  <div>
    <input v-model="newTodo">
    <button @click="addTodoAndClearNewTodo">Add todo</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    addTodoAndClearNewTodo() {
      this.addTodo(this.newTodo);

      this.newTodo = "";
    }
  }
};
</script>

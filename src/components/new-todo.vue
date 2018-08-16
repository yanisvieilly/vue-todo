<template>
  <div>
    <input v-model="newTodo">
    <button @click="addTodo">Add todo</button>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      store.addTodo(this.newTodo);

      this.newTodo = "";
    }
  }
};
</script>

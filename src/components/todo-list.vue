<template>
  <div>
    <ul>
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <NewTodo />
  </div>
</template>

<script>
import store from "../store";

import Todo from "./todo";
import NewTodo from "./new-todo";

window.store = store;

export default {
  components: {
    Todo,
    NewTodo
  },
  data() {
    return {
      todos: store.state.todos
    };
  }
};
</script>

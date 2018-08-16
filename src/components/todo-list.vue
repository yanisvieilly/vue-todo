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
import { mapState } from "vuex";

import Todo from "./todo";
import NewTodo from "./new-todo";

export default {
  components: {
    Todo,
    NewTodo
  },
  computed: mapState(["todos"])
};
</script>

<template>
<div>
  <ul>
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @remove-todo="removeTodo"
      @change-todo="changeTodo"
    >
    </Todo>
  </ul>
  <NewTodo @add-todo="addTodo"></NewTodo>
</div>
</template>

<script>
import Todo from "./todo";
import NewTodo from "./new-todo";

export default {
  components: {
    Todo,
    NewTodo
  },
  data: function() {
    return {
      todos: [
        { id: 0, name: "Do stuff", readOnly: false, done: true },
        { id: 1, name: "Accomplish things", readOnly: true, done: false },
        { id: 2, name: "Reach goals", readOnly: false, done: false }
      ]
    };
  },
  methods: {
    addTodo: function(newTodo) {
      const biggestId = Math.max(...this.todos.map(todo => todo.id));

      this.todos.push({
        id: biggestId + 1,
        name: newTodo,
        readOnly: false,
        done: false
      });
    },
    changeTodo: function(id) {
      const todo = this.todos.find(todo => todo.id === id);

      todo.done = !todo.done;
    },
    removeTodo: function(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 0, name: "Do stuff", readOnly: false, done: true },
      { id: 1, name: "Accomplish things", readOnly: true, done: false },
      { id: 2, name: "Reach goals", readOnly: false, done: false }
    ]
  },
  mutations: {
    addTodo: (state, name) => {
      const biggestId = Math.max(...state.todos.map(todo => todo.id));

      state.todos.push({
        id: biggestId + 1,
        name,
        readOnly: false,
        done: false
      });
    },
    changeTodo: (state, id) => {
      const targetTodo = state.todos.find(t => t.id === id);

      targetTodo.done = !targetTodo.done;
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter(t => t.id !== id);
    }
  }
});

export default store;

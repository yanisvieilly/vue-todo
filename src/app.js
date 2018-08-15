import Vue from "vue";

import TodoList from "./components/todo-list.vue";

new Vue({
  el: "#app",
  render: function(h) {
    return h(TodoList);
  }
});

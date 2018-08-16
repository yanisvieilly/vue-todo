export default {
  state: {
    todos: [
      { id: 0, name: "Do stuff", readOnly: false, done: true },
      { id: 1, name: "Accomplish things", readOnly: true, done: false },
      { id: 2, name: "Reach goals", readOnly: false, done: false }
    ]
  },
  addTodo(name) {
    const biggestId = Math.max(...this.state.todos.map(todo => todo.id));

    this.state.todos.push({
      id: biggestId + 1,
      name,
      readOnly: false,
      done: false
    });
  },
  changeTodo(id) {
    const targetTodo = this.state.todos.find(t => t.id === id);

    targetTodo.done = !targetTodo.done;
  },
  removeTodo(id) {
    this.state.todos = this.state.todos.filter(t => t.id !== id);
  }
};

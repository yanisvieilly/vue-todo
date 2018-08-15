Vue.component("todo", {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <li>
      <span :class="{ done: todo.done }">{{todo.name}}</span>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="$emit('change-todo', todo.id)"
      >
      <button :disabled="todo.readOnly" @click="$emit('remove-todo', todo.id)">
        &times;
      </button>
    </li>
  `
});

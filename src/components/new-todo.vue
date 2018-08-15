<template>
<div>
  <input v-model="newTodo">
  <button @click="addTodo">Add todo</button>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo: function() {
      this.$emit("add-todo", this.newTodo);
      this.newTodo = "";
    }
  }
};
</script>

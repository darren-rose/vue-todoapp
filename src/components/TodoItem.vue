<template>
  <div>
    <button v-on:click="removeTodo">remove</button>
    <input v-bind:checked="todo.completed" type="checkbox" v-on:change="toggleCompleted" />
    {{todo.id}}
    <span v-bind:class="{done : todo.completed}">{{todo.title}}</span>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ["todo"],
  methods: {
    toggleCompleted() {
      this.$store.dispatch('toggleDone', this.todo.id)
    },
    removeTodo() {
      // eslint-disable-next-line
      console.log('removeTodo', this.todo.id)
      this.$store.dispatch('removeTodo', this.todo.id)
      this.title = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
    text-decoration: line-through;
}
</style>

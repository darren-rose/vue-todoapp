<template>
  <div class="todos">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" />
    </div>
    <div v-if="todos.length == 0">
      no tasks
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'Todos',
  components : {
    TodoItem
  },
  methods: {
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

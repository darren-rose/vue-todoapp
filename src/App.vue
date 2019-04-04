<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>todo app</span><span class="font-weight-light"> using MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Header/>
      <AddTodo v-bind:nextId="nextId" />
      <Todos />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    Header,
    AddTodo,
    Todos
  },
  created () {
    this.$store.dispatch('fetchTodos')
  },
  computed: {
    nextId () {
      if (this.$store.getters.todos.length == 0) return 1
      return this.$store.getters.todos[this.$store.getters.todos.length - 1].id + 1
    }
  }
}
</script>

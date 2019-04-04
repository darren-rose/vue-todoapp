<template>
  <div>
    <v-layout row wrap>
      <v-flex xs1 sm1 md1>
        <v-checkbox :label="`Done`" :input-value="todo.completed" type="checkbox" v-on:change="toggleCompleted" />
      </v-flex>
      <v-flex xs12 sm3 md1>
        <v-btn v-on:click="removeTodo" flat><span class="mr-2">Remove</span></v-btn>
      </v-flex>
      <v-flex xs12 sm3 md1>
        {{todo.id}}
        <span v-bind:class="{done : todo.completed}">{{todo.title}}</span>
      </v-flex>
    </v-layout>

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

<template>
  <div>
    <form @submit.prevent="addTodo">
      <v-layout row wrap>
        <v-flex xs12 sm6 md3>
          <v-text-field v-model="title" label="Add Todo"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-btn v-bind:title="addTitle" v-bind:disabled="!title" type="submit" flat><span class="mr-2">Add</span></v-btn>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  props: ["nextId"],
  data() {
    return {
      title : '',
      addTitle: 'click to add todo'
    }
  },
  computed: {
  },
  methods : {
    addTodo() {
      const newTodo = {
        id : this.nextId,
        title : this.title,
        completed : false
      }
      // eslint-disable-next-line
      console.log('addTodo', newTodo)
      this.$store.dispatch('addTodo', newTodo)
      this.title = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

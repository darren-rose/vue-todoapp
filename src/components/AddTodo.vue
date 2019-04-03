<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" name="title" v-model="title" placeholder="Add todo" />
      <input v-bind:disabled="!title" type="submit" value="add">
      <v-btn flat target="_blank"><span class="mr-2">Add</span></v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  props: ["nextId"],
  data() {
    return {
      title : ''
    }
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

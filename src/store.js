import Vue from 'vue'
import Vuex from 'vuex' // 1. Add

import axios from 'axios';

// 2. Use
Vue.use(Vuex)

// 3. Create store
export default new Vuex.Store({
  state: {
    todos: [],
    loadingStatus: ''
  },
  getters: {
    todos: state => {
      return state.todos
    },
    loadingStatus: state => {
      return state.loadingStatus
    }
  },
  mutations: {
    SET_TODOS: (state, todos) => state.todos = todos,
    REMOVE_TODO: (state, id) => state.todos = state.todos.filter(t => t.id != id),
    ADD_TODO: (state, newTodo) => state.todos = [...state.todos, newTodo],
    TOGGLE_DONE: (state, id) => {
      const i = state.todos.findIndex(t => t.id == id);
      state.todos[i].completed = !state.todos[i].completed; 
    },
    SET_LOADING_STATUS: (state, status) => state.loadingStatus = status
  },
  actions: {
    fetchTodos(context) {
      // eslint-disable-next-line
      console.log('store.fetchTodos')
      context.commit('SET_LOADING_STATUS', 'loading')
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          context.commit('SET_LOADING_STATUS', 'loaded')
          context.commit('SET_TODOS', response.data.slice(0,10))
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log('loading error', err)
        })
    },
    removeTodo(context, id) {
      context.commit('REMOVE_TODO', id)
    },
    addTodo(context, newTodo) {
      context.commit('ADD_TODO', newTodo)
    },
    toggleDone(context, id) {
      context.commit('TOGGLE_DONE', id)
    }
  }
})

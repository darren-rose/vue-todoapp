<template>
  <div>
    <div v-bind:key="n" v-for="n in 3">{{computedHero}}</div>
    <div v-bind:key="n+10" v-for="n in 3">{{methodHero()}}</div>
  </div>
</template>

<script>
import { superman, spiderman } from '../super-heros';

export default {
  name: 'Header',
  computed: {
    computedHero() {
      // eslint-disable-next-line
      console.log('computedHero')
      return spiderman()
    }
  },
  methods: {
    methodHero() {
      // eslint-disable-next-line
      console.log('methodHero')
      return superman()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

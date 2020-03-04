<script>
import DeepThought from './components/DeepThought.vue'

export default {
  name: 'App',
  components: {
    DeepThought,
  },
  data() {
    return {
      who: '',
    };
  },
}
</script>

<template>
  <div id="app">
    <h1 v-if="!who">Hello, I am Deep Thought. Who is this?</h1>
    <h1 v-else>Greetings {{ who }}.</h1>
    <DeepThought v-model="who" />
  </div>
</template>

<style>
html, body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  background: url('/assets/deep-thought.jpg') no-repeat top center;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>

<script>
import { answer, question } from 'the-ultimate-question';
export default {
  name: 'DeepThought',
  props: {
    value: String
  },
  data() {
    return {
      answer: answer(),
      question: question(),
      asked: false,
    };
  },
  methods: {
    buildComputer() {
      this.asked = true;
    },
    reset() {
      console.log('Alright, I\'ve forgotten everything.');
      this.asked = false;
      this.$emit('input', '');
    },
  },
}
</script>

<template>
  <div v-if="!value">
    <button @click="$emit('input', 'Zephod')">Zephod Beeblebrox</button>
    <button @click="$emit('input', 'Arthur')">Arthur Dent</button>
    <button @click="$emit('input', 'Trillian')">Tricia McMillan</button>
  </div>
  <div v-else-if="!asked">
    The answer is {{ answer }}. I'm quite sure it's right.<br>
    I can build a computer to determine the question...<br><br>
    <button @click="buildComputer">Do it!</button>
  </div>
  <div v-else class="question">
    {{ question }}<br><br>
    <button @click="reset">Reset</button>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: #ff8200;
  color: #fff;
  border: none;
  padding: 7px 12px;
  font-weight: bold;
  border-radius: 4px;
  margin: 0 5px 5px 0;
  cursor: pointer;
}
.question {
  max-width: 300px;
}
</style>

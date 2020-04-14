<template>
  <div class="question">
    <p class="question__title">Ma la kulantay mid ama ka badan oo ka mid ah astaamaha soo socda?</p>
    <ul class="question__list">
      <li class="question__list-item question__list-item--odd">Qandho daran</li>
      <li class="question__list-item question__list-item--even">Qufac cusub</li>
      <li class="question__list-item question__list-item--odd">Neefta oo yaraata (xataa haddii aadan wax hawl ah qaban)</li>
    </ul>

    <div class="question__footer">
      <button @click="yes()" class="btn btn--action btn--positive">
        Haa
      </button>

      <button @click="no()" class="btn btn--action btn--negative">
        Maya
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      answer: Object
    },

    methods: {
      yes() {
        this.$emit('update:mild', true);
        this.$emit('update:answer', {q: 2, v: true, a: true, n: 4, p: 1});
      },

      no() {
        this.$emit('update:answer', {q: 2, v: false, a: true, n: 3, p: 1});
      }
    },
  }
</script>

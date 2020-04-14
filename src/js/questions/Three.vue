<template>
  <div class="question">
    <p class="question__title">Ma la kulantay 2 ama wax ka badan astaamaha soo socda?</p>
    <ul class="question__list">
      <li class="question__list-item question__list-item--odd">Murqo xanuun</li>
      <li class="question__list-item question__list-item--even">Daal</li>
      <li class="question__list-item question__list-item--odd">Madax xanuun</li>
      <li class="question__list-item question__list-item--even">Cuno xanuun</li>
      <li class="question__list-item question__list-item--odd">Duuf badan oo kaa yimaada</li>
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
        this.$emit('update:answer', {q: 3, v: true, a: true, n: 4, p: 2});
      },

      no() {
        this.$emit('update:answer', {q: 3, v: false, a: true, n: 4, p: 2});
      }
    }
  }
</script>

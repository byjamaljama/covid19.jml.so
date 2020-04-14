<template>
  <div class="question">
    <p class="question__title">Ma u socdaashay ama se ka soo laabatay meel ka baxsan Soomaaliya 14-kii maalmood ee la soo dhaafay?</p>

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
      answer: Object,
      symptoms: Boolean,
      condition: Boolean
    },

    methods: {
      nextPage() {
        return this.symptoms === true && this.condition === true ? 9 : 10;
      },

      yes() {
        this.$emit('update:answer', {q: 5, v: true, a: true, n: this.nextPage() , p: 4});
      },

      no() {
        this.$emit('update:answer', {q: 5, v: false, a: true, n: 6, p: 4});
      }
    },
  }
</script>

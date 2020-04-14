<template>
  <div class="question">
    <p class="question__title">Miyaad xiriir dhow la leedahay qof ay hayso jirro habdhiska neef-mareenka ah ama dhowaan u dhoofay meel ka baxsan Soomaaliya?</p>
    <p class="question__subtitle">Tusaale Calaamadaha neefsashada waxaa ka mid ah qandho, qufac ama neefsashada oo ku dhibta.</p>

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
        this.$emit('update:answer', {q: 7, v: true, a: true, n: this.nextPage() , p: 6});
      },

      no() {
        this.$emit('update:answer', {q: 7, v: false, a: true, n: this.nextPage(), p: 6});
      }
    }
  }
</script>

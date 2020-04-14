<template>
  <div class="question">
    <p class="question__title">Ma jiraa qof aad xiriir dhow leedihiin oo la ga helay COVID-19?</p>
    <p class="question__subtitle">Tusaale ahaan, qof reerkaaga ka mid ah ama aad is ku goob ka shaqaysaan.</p>

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
        this.$emit('update:answer', {q: 6, v: true, a: true, n: this.nextPage() , p: 5});
      },

      no() {
        this.$emit('update:answer', {q: 6, v: false, a: true, n: 7, p: 5});
      }
    }
  }
</script>

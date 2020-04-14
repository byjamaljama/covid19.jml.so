<template>
  <div class="question">
    <p class="question__title">Ma la kulantay mid ka mid ah astaamaha soo socda?</p>
    <ul class="question__list">
      <li class="question__list-item question__list-item--odd">Neefsashada oo dhib kugu ah (tusaale ahaan, neefsashada oo ku dhibta ama hadalka oo ku gu ka la go’a)</li>
      <li class="question__list-item question__list-item--even">Feero xanuun daran (qarqaryo leh)</li>
      <li class="question__list-item question__list-item--odd">Jahawareer (tusaale ahaan, hubid la’aan meesha aad joogtid)</li>
      <li class="question__list-item question__list-item--even">Miyir beelid (miyir daboolmid)</li>
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
        this.$emit('update:answer', {q: 1, v: true, a: true, n: 8, p: 0});
      },

      no() {
        this.$emit('update:answer', {q: 1, v: false, a: true, n: 2, p: 0});
      },
    }
  }
</script>

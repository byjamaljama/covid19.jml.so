<template>
  <div class="question">
    <p class="question__title">Mid ka mid ah xaaladaha soo socdaa ma ku sugan tahay?</p>
    <ul class="question__list">
      <li class="question__list-item question__list-item--odd">Waxa aan ka weyn ahay 60 sano jir</li>
      <li class="question__list-item question__list-item--even">Waxa aan ahay leeyahay xaalad saamayn ku leh habka difaaca ee jirkayganu (sida, HIV/AIDS)</li>
      <li class="question__list-item question__list-item--odd">Waxa aan qabaa xaalad caafimaad oo raagtay (sida, kaadi-macaan/sonkor, wadne xanuun)</li>
      <li class="question__list-item question__list-item--even">Waxa aan qaataa daawo wax yeelaysa nidaamka difaaca jirkayga (tusaale ahaan, kemotherabi)</li>
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
        this.$emit('update:answer', {q: 4, v: true, a: true, n: 5, p: 3});
      },

      no() {
        this.$emit('update:answer', {q: 4, v: false, a: true, n: 5, p: 3});
      }
    },
  }
</script>

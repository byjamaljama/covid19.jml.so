<template>
    <div class="card">
      <span class="progress" v-bind:style="{ width: currentProgress + '%' }"></span>
      <header class="card__header">
        <h1 class="card__title">
          Iska-qiimaynta Cudurka COVID-19
        </h1>
        <button @click="reset()" v-if="currentPage !== 1" class="btn btn--link">&larr; Dib u soo biloow</button>
      </header>
      <div class="card__body">
        <transition name="slide-fade" >
          <one :answer.sync="answer" v-if="currentPage === 1"></one>
        </transition>
        <transition name="slide-fade" >
          <two :answer.sync="answer" v-if="currentPage === 2"></two>
        </transition>
        <transition name="slide-fade" >
          <three :answer.sync="answer" v-if="currentPage === 3"></three>
        </transition>
        <transition name="slide-fade" >
          <four :answer.sync="answer" v-if="currentPage === 4"></four>
        </transition>
        <transition name="slide-fade" >
          <five :symptoms="mildSymptoms" :condition="condition" :answer.sync="answer" v-if="currentPage === 5"></five>
        </transition>
        <transition name="slide-fade" >
          <six :symptoms="mildSymptoms" :condition="condition" :answer.sync="answer" v-if="currentPage === 6"></six>
        </transition>
        <transition name="slide-fade" >
          <seven :symptoms="mildSymptoms" :condition="condition" :answer.sync="answer" v-if="currentPage === 7"></seven>
        </transition>
        <transition name="slide-fade" >
          <emergency v-if="currentPage === 8"></emergency>
        </transition>
        <transition name="slide-fade" >
          <recommendation v-if="currentPage === 9"></recommendation>
        </transition>
        <transition name="slide-fade" >
          <stay-at-home v-if="currentPage === 10"></stay-at-home>
        </transition>
      </div>
    </div>
</template>
<script>
  import One from './questions/One';
  import Two from './questions/Two';
  import Three from './questions/Three';
  import Four from './questions/Four';
  import Five from './questions/Five';
  import Six from './questions/Six';
  import Seven from './questions/Seven';
  import Emergency from './results/Emergency';
  import Recommendation from './results/Recommendation';
  import StayAtHome from './results/StayAtHome';

  export default {
    components: {
      One,
      Two,
      Three,
      Four,
      Five,
      Six,
      Seven,
      Emergency,
      Recommendation,
      StayAtHome,
    },

    data() {
      return {
        mildSymptoms: false,
        condition: false,
        currentPage: 1,
        answer: {
          q: 0, // question number
          v: false, // value
          a: false, // answered
          n: 0, // nex page
          p: 0 // previous page
        },
      }
    },

    watch: {
      answer() {
        if ((this.answer.q === 2 && this.answer.v === true) || (this.answer.q === 3 && this.answer.v === true)) {
          this.mildSymptoms = true;
        }

        if (this.answer.q === 4 && this.answer.v === true) {
          this.condition = true;
        }

        if (this.answer.a === true) {
          this.currentPage = this.answer.n;
        }
      }
    },

    computed: {
      currentProgress () {
        if (this.currentPage === 1) {
          return 0;
        }

        return (
          this.currentPage !== 8 || 
          this.currentPage !== 9 || 
          this.currentPage !== 10
        ) ? ((this.currentPage - 1) / 7) * 100 : 
        100;
      }
    },

    methods: {
      reset() {
        this.currentPage  = 1;
      }
    }
  }
</script>

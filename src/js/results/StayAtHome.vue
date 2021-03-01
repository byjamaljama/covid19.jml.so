<template>
  <div class="result">
    <div class="alert alert--warning" role="alert">
      <p class="alert__title">Natiijada iska-qiimaynta COVID-19</p>
      <p class="alert__text">Guriga joog sida ugu macquulsan.</p>
      <ul class="alert__list">
        <li class="alert__list-item">U bax dukaannada iyo adeegyada kale ee daruuriga ah toddobaadkii hal mar</li>
        <li class="alert__list-item">Ka fogow ama u jirso dadka kale illaa 2 mitir</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { HTTP } from '../global.js'
  export default {
    async mounted() {
      try {
        await HTTP
          .request({
            url: `index.php`,
            method: `get`,
            params: {
              latitude: window.latitude,
              longitude: window.longitude,
              result: `StayAtHome`
            }
          })
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

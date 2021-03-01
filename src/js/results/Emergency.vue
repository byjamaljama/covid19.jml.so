<template>
    <div class="result">
      <div class="alert alert--danger" role="alert">
        <p class="alert__title">Natiijada iska-qiimaynta COVID-19</p>
        <p class="alert__text">Fadlan wac 449 si aad u la hadasho kaaliye caafimaad.</p>
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
            method: `post`,
            params: {
              latitude: window.latitude,
              longitude: window.longitude,
              result: `Emergency`
            },
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

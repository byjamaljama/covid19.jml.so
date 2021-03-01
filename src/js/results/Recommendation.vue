<template>
  <div class="result">
    <div class="alert alert--warning" role="alert">
      <p class="alert__title">Natiijada iska-qiimaynta COVID-19</p>
      <p class="alert__text">Haddii aad leedahay astaamaha aad soo sheegtay waa in aad naftaada go’doomisaa. Fadlan raac tallaabooyinka soo socda:</p>
      <ul class="alert__list">
        <li class="alert__list-item">Gurigaaga ha ka bixin in ay xaalad darani ku soo foodsaarto moyee (sida xaalad caafimaad oo degdeg ah)</li>
        <li class="alert__list-item">Wixii aad magaalada u ga baahato telefoonka ku dalbo ama saaxiibadaa, ehelkaaga, ama deriskaaga u dirso</li>
        <li class="alert__list-item">Ha aadin isbitaalka ama xarumaha caafimaad si aad u hesho baaritaanka COVID-19 in kooxaha daryeelka caafimaadku kaa codsadaan mooyee</li>
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
            method: `post`,
            params: {
              latitude: window.latitude,
              longitude: window.longitude,
              result: `Recommendation`
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

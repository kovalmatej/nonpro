<template>
  <div class="wrap">
    <div class="main">
      <div class="block sponsored">
        <h2>Sponzorované</h2>
        <div class="sponsored-content">
          <div class="orgs" >
            <sponsored :organizations="organizations"/>
          </div>
          <div class="img-container">
            <span>Využi možnosť zobrazenia v tejto sekcií a dostaň svoju organizáciu do popredia</span>

            <img src="/trophy.svg" width="200">
          
            <global-button text="Topovať organizáciu" type="secondary"></global-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sponsored from "./Sponsored.vue";

import organizations from "../../organizationsData";
import GlobalButton from '../Global/GlobalButton.vue';

export default {
  name: 'Hero',
  components: {
    Sponsored,
    GlobalButton
  },
  computed: {
     organizations() {
      return [organizations[0], organizations[1], organizations[2]];
    }
  }
}

</script>
<style lang="sass" scoped>
.wrap
  display: flex
  justify-content: center

.main
  display: flex
  width: 90%
  gap: 4rem
  margin-top: 3rem
  margin-bottom: 3rem

.block
  flex-direction: column

h2
  font-size: 2rem
  margin-bottom: 2rem

.sponsored
  flex: 1

.sponsored-content
  display: flex
  gap: 3rem

.img-container
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 2rem
  font-weight: bold
  text-align: center
  flex: 2

span
  font-size: 1.3rem

.orgs
  flex: 4

</style>
<template>
  <div class="sponsored">
    <h1>Sponzorované</h1>

    <div class="list">
      <NonProfitPreview 
        :key="org.id" 
        v-for="org in organizations"
        :id="org.id"
        :title="org.title"
        :ICO="org.ico"
        :city="org.city"
        :nace="org.nace"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NonProfitPreview from "../NonProfitPreview"

export default {
  name: "Sponsored",
  components: {
    NonProfitPreview
  },
  data() {
    return {
      organizations: []
    }
  },
  async created() {
    axios.get("http://localhost:5000/organizations/sponsored")
      .then(res => {
        this.organizations = res.data;
      })
  }
}
</script>

<style lang="sass" scoped>
.sponsored
  display: flex
  flex-direction: column
  flex: 2
  background: rgb(255,255,255)
  background: linear-gradient(140deg, rgba(255,255,255,1) 51%, rgba(255,246,255,1) 100%)
  color: #222
  border-radius: 0 0 0.9em 0.9em
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2) 
  margin-top: 3rem
  padding: 3rem
h1
  margin-bottom: 1em
.list
  display: flex
  flex-direction: column
  gap: 1.8rem
</style>
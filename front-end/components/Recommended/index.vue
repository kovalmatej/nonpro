<template>
  <div class="wrap">
    <div class="question-form">
      <div class="content">
          <h1>Odporúčané organizácie na základe vašich preferencií</h1>

          <div class="previews" v-if="recommendedOrganizations">
            <NonProfitPreview 
              :key="org.id" 
              v-for="org in recommendedOrganizations" 
              :id="org.id"
              :title="org.title"
              :ICO="org.ico"
              :city="org.city"
              :nace="org.nace"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import NonProfitPreview from "../NonProfitPreview"

export default {
  name: "Recommended",
  components: {
    NonProfitPreview
  },
  data() {
    return {
      recommendedOrganizations: {}
    }
  },
  methods: {
    ...mapGetters(["getUsername"])
  },
  async created() {
    axios.get(`http://localhost:5000/organizations/${ this.getUsername() }/recommended/username`)
      .then(res => {
        this.recommendedOrganizations = res.data;
      })
  }
}
</script>

<style lang="sass" scoped>
.question-form
  display: flex
  justify-content: flex-start
  min-height: 40em
  background: rgb(255,255,255)
  background: linear-gradient(140deg, rgba(255,255,255,1) 51%, rgba(255,246,255,1) 100%)
  color: #222
  border-radius: 0 0 0.9em 0.9em
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2)
  margin-top: 3em
  padding: 3rem
  h1
    font-size: 2.1em
    margin-bottom: 1em

.previews
  display: flex
  flex-direction: column
  gap: 1.8rem

.wrap
  flex: 3
</style>
<template>
  <div>
    <User />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex"


export default {
  layout: "clasic",
  data() {
    return {
      isLogged: this.getIsLogged()
    }
  },
  methods: {
    ...mapGetters(["getIsLogged"])
  },
  created() {
    if(this.isLogged) {
      this.$router.push("/")
    }
  },
}
</script>

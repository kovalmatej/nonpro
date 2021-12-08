<template>
  <div>
    <Auth />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  layout: "clasic",
  data() {
    return {
      isLogged: false
    }
  },
  async created() {
    const logged = await this.getIsLogged();
    this.isLogged = logged;
    
    if(this.isLogged) {
      this.$router.push("/")
    }
  },
  methods: {
    ...mapGetters(["getIsLogged"])
  }
}
</script>

<template>
  <div>
    <Admin />
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
}
</script>

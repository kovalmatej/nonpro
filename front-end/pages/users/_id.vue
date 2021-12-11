<template>
  <div>
    <User />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import axios from "axios";

export default {
  layout: "clasic",
  data() {
    return {
      isLogged: false
    }
  },
  methods: {
    ...mapGetters(["getIsLogged"])
  },
  async created() {
    const logged = await this.getIsLogged();

    if(!logged) {
      this.$router.push("/");
    }
  },
}
</script>

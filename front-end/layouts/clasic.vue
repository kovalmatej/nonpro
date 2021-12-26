<template>
  <div>
    <Navigation :isLogged="isLogged" />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from "../components/Navigation"
import { mapGetters } from "vuex";

export default {
  name: "clasic",
  components: {
    Navigation
  },
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
    this.isLogged = logged;
  }
}
</script>
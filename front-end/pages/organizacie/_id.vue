<template>
  <div>
   <Organization :isLogged="getIsLogged()" />
   <Footer /> 
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  layout: "clasic",
  methods: {
    ...mapGetters(["getIsLogged"])
  },
}
</script>

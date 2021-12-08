<template>
  <div>
    <QuestionsForm v-if="showForm" />
    <Hero v-else />
		<AboutUs v-if="!showForm" />
		<Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "clasic",
  data() {
    return {
      showForm: false
    }
  },
  methods: {
    ...mapGetters(["getIsLogged"])
  },async created() {
    const logged = await this.getIsLogged();
    this.showForm = logged;
  }
}
</script>

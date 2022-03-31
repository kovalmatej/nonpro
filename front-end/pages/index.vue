<template>
  <div>
    <QuestionsForm v-if="showForm" :showRecommended="showRecommended" />
    <Hero v-else />
		<AboutUs v-if="!showForm" />
		<Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  layout: "clasic",
  data() {
    return {
      showForm: false,
      showRecommended: true
    }
  },
  methods: {
    ...mapGetters(["getIsLogged", "getUsername"])
  },
  async created() {
    const logged = await this.getIsLogged();
    this.showForm = logged;

    axios.get(`http://localhost:5000/user/${ this.getUsername() }/answered`)
      .then(res => {
        console.log(res.data.answered + "answered")
        this.showRecommended = res.data.answered;
      });
  }
}
</script>

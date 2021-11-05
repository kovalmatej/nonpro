<template>
  <div>
    <Navigation />
    <QuestionsForm v-if="showForm" />
    <Hero v-else />
		<AboutUs v-if="!showForm" />
		<Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showForm: false 
    }
  }
})
</script>

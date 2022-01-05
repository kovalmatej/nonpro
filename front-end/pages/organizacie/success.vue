<template>
	<div>
		<Success />
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
	},
  methods: {
    ...mapGetters(["getIsLogged"])
  },
}
</script>


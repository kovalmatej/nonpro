<template>
	<div class="block similar-organizations" v-if="similarOrganizations">
		<h2>Podobné organizácie</h2>
		<similar-organization 
			:key="org.id" 
			v-for="org in similarOrganizations" 
			:id="org.id"
			:title="org.title"
			:ico="org.ico"
			:city="org.city"
		/>
	</div>
</template>

<script>
import SimilarOrganization from "./SimilarOrganization";
import axios from "axios";

export default {
	name: "SimilarOrganizations",
	components: {
		SimilarOrganization
	},
	data() {
		return {
			similarOrganizations: null
		}
	},
	props: {
		ico: String
	},
	async created() {
		axios.get(`http://localhost:5000/organizations/${ this.ico }/nace/similar`)
			.then(res => {
				this.similarOrganizations = res.data;
			});
	}
}
</script>

<style lang="sass" scoped>
.block.similar-organizations
  flex: 4
  flex-direction: column
  gap: 1.5rem
  padding: 3rem

h2
  font-family: "TT Commons"
  color: #222
  font-size: 2.3em

@media only screen and (max-width: 1400px)
  .block.similar-organizations
    width: 95%
</style>

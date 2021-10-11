<template>
	<div class="block similar-organizations">
		<similar-organization :id="2" title="V.I.A.C - neziskova organizacia" />
		<similar-organization :id="2" title="V.I.A.C - neziskova organizacia" />
		<similar-organization :id="2" title="V.I.A.C - neziskova organizacia" />
		<similar-organization :id="2" title="V.I.A.C - neziskova organizacia" />
	</div>
</template>

<script>
import SimilarOrganization from "./SimilarOrganization";

export default {
	name: "SimilarOrganizations",
	components: {
		SimilarOrganization
	}
}
</script>

<style lang="sass" scoped>
.block.similar-organizations
  flex: 1
  flex-direction: column
  gap: 1.5rem
  padding: 1rem
</style>

<template>
	<div class="wrap">
		<OrganizationInfo 
      :id="this.$route.params.id" 
      title="V.I.A.C - neziskova organizacia" 
    />
    <SimilarOrganizations />
	</div>
</template>

<script>
import OrganizationInfo from "./OrganizationInfo.vue";
import SimilarOrganizations from "../SimilarOrganizations";

export default {
	name: "Organization",
  components: {
    OrganizationInfo,
    SimilarOrganizations
  }
}
</script>

<style lang="sass" scoped>
.wrap
  width: 90%
  display: flex
  gap: 3em
  margin-top: 3em
</style>

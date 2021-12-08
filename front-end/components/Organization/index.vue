<template>
	<div class="wrap">
		<OrganizationInfo 
      :id="this.$route.params.id" 
      title="V.I.A.C - neziskova organizacia"
      ICO="30686661"
      city="Košice - Západ"
      street="Rubínová" 
      PSC="029 58"
      type="Občianske združenie"
      category="Zdravotníctvo a sociálna pomoc"
      IBAN="SK5411000000002623111750"
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
  },
  props: {
    isLogged
  }
}
</script>

<style lang="sass" scoped>
.wrap
  width: 90%
  display: flex
  gap: 3em
  margin-top: 3em
  min-height: calc(100vh - 13em)
  align-items: flex-start
</style>

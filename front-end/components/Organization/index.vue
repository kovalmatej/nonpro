<template>
	<div class="wrap" v-if="!loading">
		<OrganizationInfo 
      :id="this.$route.params.id" 
      :title="organization.title || ''"
      :ICO="organization.ico || ''"
      :city="organization.city || ''"
      :street="organization.street || ''" 
      :PSC="organization.psc || ''"
      :type="organization.pravna_forma || ''"
      :category="organization.category || ''"
      :IBAN="organization.iban || ''"
      :nace="organization.type || ''"
    />
    <SimilarOrganizations />
	</div>
</template>

<script>
import OrganizationInfo from "./OrganizationInfo.vue";
import SimilarOrganizations from "../SimilarOrganizations";

import axios from "axios";

export default {
  layout: "clasic",
	name: "Organization",
  components: {
    OrganizationInfo,
    SimilarOrganizations
  },
  created() {
    this.fetchOrganizationData();
  },
  data() {
    return {
      organization: {},
      loading: true,
      nace: ""
    }
  },
  props: {
    isLogged: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async fetchOrganizationData() {
      await axios.get(`http://localhost:5000/organizations/${this.$route.params.id}`)
        .then(res => {
          this.organization = res.data;
      });

      this.loading = false;
    }
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

@media only screen and (max-width: 1400px)
  .wrap
    flex-direction: column

@media only screen and (max-width: 700px)
  .wrap
    width: 97%
    overflow: hidden
</style>

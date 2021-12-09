<template>
	<div class="wrap" v-if="!loading">
		<OrganizationInfo 
      :id="this.$route.params.id" 
      :title="organization.title"
      :ICO="organization.ico"
      :city="organization.city"
      :street="organization.street" 
      :PSC="organization.psc"
      :type="organization.pravna_forma"
      :category="organization.category"
      :IBAN="organization.iban"
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
    }
  },
  props: {
    isLogged: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    fetchOrganizationData() {
      axios.get(`http://localhost:5000/organizations/${this.$route.params.id}`)
        .then(res => {
          this.organization = res.data;
      });
      this.loading = false;
      console.log(this.organization + "organization");
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
</style>

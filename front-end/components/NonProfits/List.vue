<template>
	<div class="list block">
		<h1 class="title">Zoznam neziskových organizácií</h1>

		<div class="organizacie">
			<non-profit-preview 
				:key="i"
				v-for="(organization, i) in filteredOrganizations"
				:title="organization.title" 
				:id="organization.id"
				:city="organization.city"
				:ICO="organization.ico"
			/>

			<pagination 
				:numberOfPages="numberOfPages" 
				@pagechanged="changeCurrentPage"
			/>
		</div>
	</div>
</template>

<script>
import Pagination from '../Global/Pagination.vue';
import NonProftiPreview from '../NonProfitPreview';

import axios from "axios";

export default {
	name: "List",
	components: {
		NonProftiPreview,
		Pagination
	},
	data() {
		return {
			currentPage: 0,
			displayItems: 5,
			organizations: [],
		}
	},
	created() {
		this.fetchOrganizations();
	},
	computed: {
		filteredOrganizations() {
			let newOrganizations = this.organizations.filter(
				(org, i) => { 
					if(i >= this.indexToDisplayFrom && i < this.maxIndexToDisplayFrom) {
						return org;
					}
				}
			);

			return newOrganizations;
		},
		numberOfOrganizations() {
			return this.organizations.length + 1;
		},
		indexToDisplayFrom() {
			return this.currentPage * this.displayItems;
		},
		maxIndexToDisplayFrom() {
			return (this.currentPage + 1) * this.displayItems;
		},
		numberOfPages() {
			return Math.ceil(this.organizations.length / this.displayItems)
		}
	},
	methods: {
		changeCurrentPage(i) {
			this.currentPage = i;
		},
		fetchOrganizations() {
			axios.get("http://localhost:5000/organizations/getAll")
				.then(res => {
						this.organizations = res.data;
				})
		}
	}
}
</script>

<style lang="sass" scoped>
.list
  flex: 9
  flex-direction: column
.title
  margin-bottom: 2rem

.organizacie
  display: flex
  flex-direction: column
  gap: 2rem
</style>

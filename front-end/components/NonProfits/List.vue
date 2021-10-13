<template>
	<div class="list block">
		<h1 class="title">Zoznam neziskových organizácií</h1>

		<div class="organizacie">
			<non-profit-preview 
				:key="i"
				v-for="(organization, i) in organizations"
				:title="organization.title" 
				:id="organization.id"
				:city="organization.city"
				:ICO="organization.ICO"
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

import organizations from '../../organizationsData';

export default {
	name: "List",
	components: {
		NonProftiPreview,
		Pagination
	},
	data() {
		return {
			currentPage: 0,
			displayItems: 5
		}
	},
	computed: {
		organizations() {
			let newOrganizations = organizations.filter(
				(org, i) => { 
					if(i >= this.indexToDisplayFrom && i < this.maxIndexToDisplayFrom) {
						return org;
					}
				}
			);

			console.log(newOrganizations);

			return newOrganizations;
		},
		numberOfOrganizations() {
			return organizations.length + 1;
		},
		indexToDisplayFrom() {
			return this.currentPage * this.displayItems;
		},
		maxIndexToDisplayFrom() {
			return (this.currentPage + 1) * this.displayItems;
		},
		numberOfPages() {
			return Math.ceil(organizations.length / this.displayItems)
		}
	},
	methods: {
		changeCurrentPage(i) {
			this.currentPage = i;
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

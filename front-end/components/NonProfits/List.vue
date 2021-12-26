<template>
	<div class="list block">
		<h1 class="title">Zoznam neziskových organizácií</h1>

		<div class="organizacie">
			<non-profit-preview 
				:key="i"
				v-for="(organization, i) in filteredOrganizations"
				:title="organization.title || ''" 
				:id="organization.id || ''"
				:city="organization.city || ''"
				:ICO="organization.ico || ''"
				:nace="organization.type || ''"
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
	props: {
		naceFilter: Array,
		formaFilter: Array
	},
	data() {
		return {
			currentPage: 0,
			displayItems: 5,
			organizations: []
		}
	},
	async created() {
		await this.fetchOrganizations();
	},
	computed: {
		filteredOrganizations() {
			let j = 0, k = 0;

			let filtered = [];

			console.log(this.formaFilter + " bebe")

			if(this.organizations.length > 0) {
				while(j < 5) {	
					if(this.naceFilter.length > 0) {
						if(this.naceFilter.includes(this.organizations[this.indexToDisplayFrom + k].nace_code)) {
							if(this.formaFilter.length > 0) {
								
								if(this.formaFilter.includes(this.organizations[this.indexToDisplayFrom + k].pravna_forma)) {
									filtered.push(this.organizations[this.indexToDisplayFrom + k]);
									j++;
								}
							} else {
								filtered.push(this.organizations[this.indexToDisplayFrom + k]);
								j++;
							}
						}
					}else {
						if(this.formaFilter.length > 0) {
							if(this.formaFilter.includes(this.organizations[this.indexToDisplayFrom + k].pravna_forma)) {
								filtered.push(this.organizations[this.indexToDisplayFrom + k]);
								j++;
							}
						}else {
							filtered.push(this.organizations[this.indexToDisplayFrom + k]);
							j++;
						}
					}

					k++;
				}
			}

			return filtered;
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
		async fetchOrganizations() {
			await axios.get("http://localhost:5000/organizations/getAll")
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


@media only screen and (max-width: 1400px)
  .list
    flex: 1
    width: 90%
</style>

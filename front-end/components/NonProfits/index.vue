<template>
	<div class="nonprofit-section">
		<div class="wrap">
			<div class="col">
				<search :organizations="organizations" />
				<side-filter :organizations="organizations" />
			</div>
			
			<list />
		</div>
	</div>
</template>

<script>
import SideFilter from './SideFilter.vue'
import List from "./List.vue"
import Search from './Search.vue'

import axios from "axios"
import organizations from '../../organizationsData'

export default {
  components: {
		SideFilter,
		List,
		Search
	},
	name: "NonProfits",
	props: {
		isLogged: {
			type: Boolean,
			default: false
		}
	},
  data(){
    return {
      organizations: [],
      cities: []
    }
  },
  async created() {
    axios.get("http://localhost:5000/organizations/getAll")
      .then(res => {
          this.organizations = res.data;

          for(let org of this.organizations) {
            if(this.cities.includes(org.city) === false) {
              console.log(org.city)
              this.cities.push(org.city);
            }
          }

          console.log(this.cities)
      })
  }
}
</script>

<style lang="sass" scoped>
.col
  display: flex
  flex-direction: column
  flex: 5
  gap: 4rem

.wrap
  width: 90%
  display: flex
  gap: 3em
  margin-top: 3em
  align-items: flex-start

@media only screen and (max-width: 1400px)
  .wrap
    flex-direction: column
  .col
    flex-direction: row
    flex: 1
    width: 100%

@media only screen and (max-width: 1000px)
  .col
    flex-direction: column
    width: auto
  .wrap
    align-items: center


</style>

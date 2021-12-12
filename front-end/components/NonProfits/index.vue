<template>
	<div class="nonprofit-section">
		<div class="wrap">
			<div class="col">
				<search />
				<side-filter />
			</div>
			
			<list />
		</div>
	</div>
</template>

<script>
import SideFilter from './SideFilter.vue'
import List from "./List.vue"
import Search from './Search.vue'

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

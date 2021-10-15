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
	name:
     "NonProfits"
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
</style>

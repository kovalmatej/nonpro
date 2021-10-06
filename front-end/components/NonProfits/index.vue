<template>
	<div class="nonprofit-section">
		<div class="wrap">
			<side-filter />
			<list />
		</div>
	</div>
</template>

<script>
import SideFilter from './SideFilter.vue'
import List from "./List.vue"

export default {
  components: {
		SideFilter,
		List
	},
	name: "NonProfits"
}
</script>

<style lang="sass" scoped>
.wrap
  width: 90%
  display: flex
  gap: 3em
  margin-top: 3em
</style>

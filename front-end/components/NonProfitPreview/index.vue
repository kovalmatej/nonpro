<template>
	<div class="block">
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
export default {
	name: "NonProfitPreview",
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="sass" scoped>
.filter
  flex: 5
</style>

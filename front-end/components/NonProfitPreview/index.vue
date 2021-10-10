<template>
	<a :href="`organizacie/${this.id}`">
		<div class="preview small-block">
			<h2>{{ title }}</h2>
			<h3>IČO: 30686661 | Košice</h3>

			<div class="preview-bottom">
				<a href="#" class="purple">Viac informácií</a>
			</div>
		</div>
	</a>
</template>

<script>
import GlobalButton from '../Global/GlobalButton.vue'
export default {
  components: { GlobalButton },
	name: "NonProfitPreview",
	props: {
		id: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="sass" scoped>
.small-block.preview
  flex-direction: column
  padding-right: 4rem
  h2
    color: $lightPurple
    margin-bottom: 0.8rem
    &:hover
      color: $darkPurple
  h3
    color: #333

.preview-bottom
  display: flex
  justify-content: flex-end

</style>

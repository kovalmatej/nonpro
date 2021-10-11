<template>
	<a :href="`organizacie/${this.id}`" class="link-container">
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
	name: "SimilarOrganization",
	props: {
		id: {
			type: String | Number,
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
a.link-container
  flex: 1
.small-block.preview
  flex-direction: column
  padding-right: 1rem
  h2
    color: #222
    margin-bottom: 0.8rem
    font-size: 1.45rem
    &:hover
      text-decoration: underline
  h3
    color: #333

.preview-bottom
  display: flex
  justify-content: flex-end
  a
    border-bottom: 2px solid $darkPurple
    &:hover
      border-bottom: 2px solid transparent
</style>

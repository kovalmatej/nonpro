<template>
	<a :href="`organizacie/${this.id}`">
		<div class="preview small-block">
			<h2>{{ title }}</h2>
			<h3>IČO: {{ ICO }} | {{ city }}</h3>

			<div class="preview-bottom">
				<span class="purple">Viac informácií</span>
			</div>
		</div>
	</a>
</template>

<script>
import GlobalButton from '../Global/GlobalButton.vue'
import axios from "axios"

export default {
  components: { GlobalButton },
	name: "NonProfitPreview",
	props: {
		id: {
			type: String | Number,
			required: true
		},
		title: {
			type: String | Number,
			required: true
		},
		ICO: {
			type: String | Number,
			required: true
		},
		city: {
			type: String | Number,
			required: true
		},
		nace: {
			type: String | null,
			requied: true
		}
	}
}
</script>

<style lang="sass" scoped>
.small-block.preview
  flex-direction: column
  padding-right: 4rem
  h2
    color: #222
    margin-bottom: 0.8rem
  &:hover h2
    text-decoration: underline
  h3
    color: #333

.preview-bottom
  display: flex
  justify-content: flex-end
  span
    color: $darkPurple
    text-transform: uppercase
    font-weight: bold


@media only screen and (max-width: 1000px)
  .preview-bottom
    margin-top: 2rem

</style>

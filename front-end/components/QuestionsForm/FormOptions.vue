<template>
	<div class="options">
		<form-option :key="option.id" v-for="option in options" :text="option.text" :id="option.id" @optionClicked="optionClicked" />
	</div>
</template>

<script>
import FormOption from './FormOption.vue'
export default {
	name: "FormOptions",
	components: {
		FormOption
	},
	props: {
		options: {
			type: Array,
			required: true
		}
	},
	methods: {
		optionClicked(id) {
			this.$emit("optionClicked", id)
		}
	}
}
</script>

<style lang="sass" scoped>
.options
  display: flex
  flex-direction: column
  gap: 1em
</style>

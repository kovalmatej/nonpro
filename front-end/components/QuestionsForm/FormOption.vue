<template>
	<button class="option" @click="optionClicked">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "FormOption",
	props: {
		text: {
			type: String,
			required: true
		},
		id: {
			type: Number,
			required: true
		}
	},
	methods: {
		optionClicked() {
			this.$emit("optionClicked", this.id.toString())
		}
	}
}
</script>

<style lang="sass" scoped>
button.option
  border: 2px solid $lightPurple
  background: #FFF
  color: $lightPurple
  padding: 1.5em 2em
  min-width: 12em
  font-size: 1rem
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2)
  &:hover
    background: $darkPurple
    border: 2px solid $darkPurple
    color: #FFF
</style>

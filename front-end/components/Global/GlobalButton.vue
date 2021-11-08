<template>
	<button :class="[type]">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		text: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="sass" scoped>
.primary
  background: #FFF
  color: #222
  padding: 1.5em 2em
  font-size: 1em
  margin-top: 4em
  border: 2px solid #FFF
  &:hover
    background: none
    color: #FFF
.secondary
  background: $darkPurple
  color: #FFF
  padding: 1.5em 2em
  font-size: 1em
  margin-top: 4em
  border: 2px solid $darkPurple
  &:hover
    background: #FFF
    color: $darkPurple
.ternary
  background: $yellow
  color: #FFF
  padding: 1.5em 2em
  font-size: 1em
  margin-top: 4em
  border: 2px solid $yellow
  &:hover
    background: #f39c12
</style>

<template>
	<div :class="{arrow: true, right: isDirectionRight, left: !isDirectionRight}">
		{{ isDirectionRight
		? "&gt;"
		: "&lt;"
		}}

	</div>
</template>

<script>
export default {
	name: "ChangeQuestionArrow",
	props: {
		isDirectionRight: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="sass" scoped>
.arrow
  border-radius: 50%
  width: 3em
  height: 3em
  background: #bdc3c7
  color: #FFF
  font-size: 2em
  display: flex
  justify-content: center
  align-items: center
  &:hover
    background: #2C3A47
    color: #FFF
.left
  margin-right: 3em
.right
  margin-left: 3em
</style>

<template>
	<div class="progressbar-fill">
		<div class="progressbar" :style="{width: progressBarWidth + '%'}" />
	</div>
</template>

<script>
export default {
	name: "ProgressBar",
	props: {
		max: {
			type: Number,
			required: true
		},
		currentProgress: {
			type: Number,
			required: true
		}
	},
	computed: {
		progressBarWidth() {
			if(this.currentProgress == 0) return 1

			return this.currentProgress / this.max * 100;
		}
	}
}
</script>

<style lang="sass" scoped>
.progressbar
  height: 0.6em
  background: #8e44ad
  transition: 0.25s ease-out
.progressbar-fill
  background: #ecf0f1
  height: 0.6em
  width: 100%
</style>

<template>
	<div class="block organization-info">
		text {{ this.id }}
	</div>
</template>

<script>
export default {
	name: "OrganizationInfo",
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.organization-info
  flex: 3
</style>

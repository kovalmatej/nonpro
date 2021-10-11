<template>
	<div class="block organization-info">
    <h1>
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
	name: "OrganizationInfo",
  props: {
    id: {
      type: String,
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
.organization-info
  flex: 2
</style>

<template>
  <div class="orgs">
      <non-profit-preview 
				:key="i"
				v-for="(organization, i) in organizations"
				:title="organization.title" 
				:id="organization.id"
				:city="organization.city"
				:ICO="organization.ICO"
			/>
  </div>
</template>
<script>
import NonProftiPreview from '../NonProfitPreview';

export default {
  name: 'Sponsored',
  components: {
		NonProftiPreview,
  },
  props: {
    organizations: Array
  }
}
</script>
<style lang="sass" scoped>
.orgs
  display: flex
  flex-direction: column
  gap: 2rem
  max-width: 750px
</style>
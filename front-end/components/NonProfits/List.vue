<template>
	<div class="list block">
		<h1 class="title">Zoznam neziskových organizácií</h1>

		<div class="organizacie">
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="1"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="2"/>
		</div>
	</div>
</template>

<script>
import NonProftiPreview from '../NonProfitPreview';

export default {
	name: "List",
	components: {
		NonProftiPreview
	}
}
</script>

<style lang="sass" scoped>
.list
  flex: 9
  flex-direction: column
.title
  margin-bottom: 2rem

.organizacie
  display: flex
  flex-direction: column
  gap: 2rem
</style>

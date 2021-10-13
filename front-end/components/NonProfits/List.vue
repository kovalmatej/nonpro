<template>
	<div class="list block">
		<h1 class="title">Zoznam neziskových organizácií</h1>

		<div class="organizacie">
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="1"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="2"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="3"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="4"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="5"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="6"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="7"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="8"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="9"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="10"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="11"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="12"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="13"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="14"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="15"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="16"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="17"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="18"/>
			<non-profit-preview title="V.I.A.C neziskova organizacia" id="19"/>

			<pagination :numberOfPages="5" />
		</div>
	</div>
</template>

<script>
import Pagination from '../Global/Pagination.vue';
import NonProftiPreview from '../NonProfitPreview';

export default {
	name: "List",
	components: {
		NonProftiPreview,
		Pagination
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

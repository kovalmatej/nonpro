<template>
	<div class="filter block">
		<h1>Filter</h1>

		<div class="filters">
			<div>
				<h2>Právna forma</h2>

				<div class="filter-boxes">
					<div class="filter-box">
						<input type="checkbox" id="fond" @click="toggleFormaFilter('Neinvestičný fond')">
						<label for="">Neinvestičný fond</label>
					</div>

					<div class="filter-box">
						<input type="checkbox" id="kriz" @click="toggleFormaFilter('Slovenský Červený kríž')">
						<label for="">Slovenský Červený kríž</label>
					</div>

					<div class="filter-box">
						<input type="checkbox" id="zdruzenie" @click="toggleFormaFilter('Občianske združenie')">
						<label for="">Občianske združenie</label>
					</div>

					<div class="filter-box">
						<input type="checkbox" id="vyskum" @click="toggleFormaFilter('Subjekty výskumu a vývoja')">
						<label for="">Subjekty výskumu a vývoja</label>
					</div>

					<div class="filter-box">
						<input type="checkbox" id="nabozenska" @click="toggleFormaFilter('Účelové zariadenie cirkvi a náboženskej spoločnosti')">
						<label for="">Účelové zariadenie náboženskej spoločnosti</label>
					</div>

					<div class="filter-box">
						<input type="checkbox" id="nadacia" @click="toggleFormaFilter('Nadácia')">
						<label for="">Nadácia</label>
					</div>

					<div class="filter-box">
						<input type="checkbox" id="neziskova" @click="toggleFormaFilter('Nezisková organizácia poskytujúca všeobecne prospešné služby')">
						<label for="">Nezisková organizácia</label>
					</div>

					<div class="filter-box">
						<input type="checkbox" id="medzinarodna" @click="toggleFormaFilter('Organizácia s medzinárodným prvkom')">
						<label for="">Organizácia s medzinárodným prvkom</label>
					</div>
				</div>
			</div>

			<div>
				<h2>Zameranie</h2>

				<div v-if="naces" class="filter-boxes">
					<div :key="i" class="filter-box" v-for="(nace, i) in naces">
						<input type="checkbox" :id="nace.nace" @click="toggleNaceFilter(nace.nace)">
						<label for="">{{ nace.type }}</label>
					</div>
				</div>
			</div>
		</div>

		<div class="btnblock">
			<global-button type="ternary" text="Filtrovať" @click="filterAll" />
		</div>
		
	</div>
</template>

<script>
import GlobalButton from "../Global/GlobalButton.vue";
import axios from "axios";

export default {
	name: "SideFilter",
	components: {
		GlobalButton
	},
	props: {
		organizations: Array
	},
	data() {
		return {
			naceFilter: [],
			formaFilter: [],
			naces: Array
		}
	},
	methods: {
		toggleNaceFilter(nace) {
			if(this.naceFilter.includes(nace)) {
				 this.naceFilter.splice(this.naceFilter.indexOf(nace), 1); 
			} else {
				this.naceFilter.push(nace);
			}
		},
		toggleFormaFilter(forma) {
			if(this.formaFilter.includes(forma)) {
				 this.formaFilter.splice(this.formaFilter.indexOf(forma), 1); 
			} else {
				this.formaFilter.push(forma);
			}
		},
		filterAll() {
			this.$emit("nacefilter", this.naceFilter);
			this.$emit("formafilter", this.formaFilter);
		}
	},
	async created() {
		await axios.get("http://localhost:5000/organizations/naces")
			.then(res => {
				this.naces = res.data;
		})
	}
}
</script>

<style lang="sass" scoped>
.filter
  display: flex
  flex-direction: column
  flex: 1

.filter-box
  margin-bottom: 1.5rem
  display: flex
  gap: 1rem

.filter-boxes
  margin-left: 0.7rem
  height: 21.5rem
  overflow: auto
  padding: 0.2rem

.btnblock
  display: flex
  justify-content: center

h2
  margin-bottom: 1.4rem
  margin-top: 1rem

.filters
  display: flex
  flex-direction: column
  margin-left: 0.5rem

input[type="checkbox"]
  transform: scale(2)
</style>

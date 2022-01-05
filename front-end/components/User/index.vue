<template>
	<div class="wrap">
		<div class="main block">
			<h1>Osobný profil</h1>

			<div class="sections">
				<div class="section">
					<h2>Topovanie organizácie</h2>
					<p>Pre zviditeľnenie organizácie môžeš využiť funkciu topovania, ktora zvýrazni tvoju organizáciu pre všetkých návštevnikov.<br>Platba prebieha cez platobnú bránu Stripe</p>

					<select v-if="options" v-model="selectedOrg">
						<option value="Vyber si svoju organizáciu" selected disabled>Vyber svoju organizáciu</option>
						<option :key="org.id" v-for="org in options" :value="org.id">{{ org.title }}</option>
					</select>
				
					<global-button
						type="ternary"
						text="Topovať organizáciu"
						@click="topOrganization"
					>
					</global-button>
				</div>

				<div class="line"></div>

				<div class="section">
					<h2>Pridanie organizácie</h2>

					<form>
						<div class="row">
							<div class="form-block">
								<label for="name">Názov organizácie*</label>
								<input type="text" name="name" required>
							</div>

							<div class="form-block">
								<label for="name">IČO*</label>
								<input type="text" name="ICO" required>
							</div>

						</div>

						<div class="row">
							<div class="form-block">
								<label for="name">Mesto*</label>
								<input type="text" name="city" required>
							</div>
							
							<div class="form-block">
								<label for="name">Ulica</label>
								<input type="text" name="street">
							</div>
							
							<div class="form-block">
								<label for="name">PSČ</label>
								<input type="text" name="PSC">
							</div>
						</div>

						<div class="row">
							<div class="form-block">
								<label for="name">Právna forma</label>
								<input type="text" name="type">
							</div>
						</div>

						<div class="row">
							<div class="form-block">
								<label for="name">IBAN</label>
								<input type="text" name="IBAN">
							</div>
						</div>

						
					</form>

					<global-button
						type="secondary"
						text="Vytvoriť organizáciu"
					></global-button>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import GlobalButton from "../Global/GlobalButton.vue"

import { mapGetters } from "vuex";

import axios from "axios";

export default {
	name: "User",
	components: {
		GlobalButton
	},
	data() {
		return {
			window: null,
			options: [],
			selectedOrg: "Vyber si svoju organizáciu"
		}
	},
	beforeMount() {
		this.window = window;
	},
	methods: {
		...mapGetters(["getUsername"]),
		async topOrganization() {
			if(this.selectedOrg != "Vyber si svoju organizáciu"){
				const res = await axios.post("http://localhost:5000/organizations/top", {
					organizationId: this.selectedOrg
				})

				this.window.location.replace(res.data.url)
			}
		}
	},
	async created() {
		await axios.get(`http://localhost:5000/organizations/owned/${ this.getUsername() }`)
			.then(res => {
				this.options = res.data;
				console.log(res.data[0]);			
			});
	}
}
</script>

<style lang="sass" scoped>
.wrap
  width: 90%
  min-height: calc(100vh - 5em)
.main
  margin-top: 4rem
  margin-bottom: 2rem
  display: flex
  flex-direction: column
  h1
    font-size: 3rem
    margin-bottom: 2rem
select
  height: 2rem
  width: 15rem
.sections
  display: flex
  flex-direction: column
  gap: 2rem
form
  margin-top: 1rem
  gap: 1.7rem
  display: flex
  flex-direction: column
label
  font-weight: bold
  color: #666
  margin-bottom: 0.3rem
input
  border: 2px solid #ccc
  padding: 0.5rem 1rem
  border-radius: 0.5rem
  outline: none
.form-block
  display: flex
  flex-direction: column
  align-items: flex-start
.row
  display: flex
  gap: 1rem
.line
  width: 100%
  height: 2px
  background: #ccc
</style>

<template>
	<div class="filter block">
		<h1>Filter</h1>

		<div class="filters">
			<div>
				<h2>Právna forma</h2>

				<div class="filter-boxes">
					<div class="filter-box">
						<input type="checkbox">
						<label for="">Neinvestičný fond</label>
					</div>

					<div class="filter-box">
						<input type="checkbox">
						<label for="">Slovenský Červený kríž</label>
					</div>

					<div class="filter-box">
						<input type="checkbox">
						<label for="">Občianske združenie</label>
					</div>

					<div class="filter-box">
						<input type="checkbox">
						<label for="">Subjekty výskumu a vývoja</label>
					</div>

					<div class="filter-box">
						<input type="checkbox">
						<label for="">Účelové zariadenie náboženskej spoločnosti</label>
					</div>

					<div class="filter-box">
						<input type="checkbox">
						<label for="">Nadácia</label>
					</div>

					<div class="filter-box">
						<input type="checkbox">
						<label for="">Nezisková organizácia</label>
					</div>

					<div class="filter-box">
						<input type="checkbox">
						<label for="">Organizácia s medzinárodným prvkom</label>
					</div>
				</div>
			</div>

			<div>
				<h2>Zameranie</h2>

				<div class="filter-boxes">
					<div class="filter-box">
							<input type="checkbox">
							<label for="">Zameranie 1</label>
						</div>

						<div class="filter-box">
							<input type="checkbox">
							<label for="">Zameranie 2</label>
						</div>
					</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	name: "SideFilter",
	props: {
		organizations: Array
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

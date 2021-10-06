<template>
	<div class="about-us">
		<div class="wrap">
			<div class="text">
				<h1>O nás</h1>

				<p><b>NonPro</b> slúží na vyhľadávanie neziskových organizácií a informácií o nich, taktiež ponúkamé prispôsobený zoznam organizácií na základe vašich preferencií, ktoré by vás mohli zaujať pre darovanie svojich 2% z daní.</p>
				<p>Po registrácií je možné pridať vlastnú organizáciu, meniť údaje a podieľať sa tak tiež na tvorbe obsahu.</p>

				<global-button text="Registrovať sa" type="primary" />

			</div>
			<div class="images">
				<img src="/tournament.png" width="300" />
			</div>
		</div>
	</div>
</template>

<script>
import GlobalButton from "../Global/GlobalButton"

export default {
	name: "AboutUs",
	components: {
		GlobalButton
	}
}
</script>

<style lang="sass" scoped>
.about-us
  width: 100%
  min-height: 15em
  background: rgb(176,99,208)
  background: linear-gradient(151deg, rgba(176,99,208,1) 0%, rgba(143,80,170,1) 100%)
  padding: 5em 0
.wrap
  width: 70%
  display: flex
h1
  color: #FFF
  font-size: 4em
p
  color: #fff
  font-size: 1.5em
  width: 60%
  letter-spacing: 0.07em
  font-family: 'TT Commons'
  line-height: 1em
</style>

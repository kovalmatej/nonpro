<template>
	<footer>
		<div class="wrap">
			<h1>nonpro.sk</h1>

			<ul>
				<li>Kontakt</li>
				<li>FAQ</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
}
</script>

<style lang="sass" scoped>
footer
  background: #FFF
  height: 5em
  width: 100%
  display: flex
  align-items: center
.wrap
  width: 90%
  display: flex
  justify-content: space-between
  align-items: center
h1
  font-family: "TT Commons"
  font-size: 2.3em
ul
  display: flex
  align-items: center
  height: 100%
  gap: 2em
  li
    font-weight: medium
    font-size: 1.2em
    border-bottom: 2px solid #FFF
    &:hover
      border-bottom: 2px solid #000
</style>

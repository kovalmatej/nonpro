<template>
  <div class="block">
    <h1>Vyhľadávanie</h1>

    <div class="container">
      <input type="text">

      <img src="/search.svg" alt="Vyhľadať" width="25">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="sass" scoped>
.block
  display: flex
  flex-direction: column
  flex: 1

.container
  position: relative
  display: inline-flex
  margin-top: 2rem

input
  border: 2px solid $darkBlue
  flex: 1
  border-radius: 0.4rem
  padding: 1rem 3rem 1rem 1.5rem
  font-size: 1.2rem
  color: $darkBlue
  outline: none

img
  position: absolute
  top: 50%
  right: 1rem
  transform: translateY(-50%)
  cursor: pointer
</style>
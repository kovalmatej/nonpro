<template>
  <div class="window">
    <h1>
      Vaša organizácia bola úspešne topovaná :)
    </h1>
  </div>
</template>

<script>
export default {
  name: "Success"
}
</script>

<style lang="sass">
.window
  display: flex
  justify-content: center
  min-height: calc(100vh - 7rem)
h1
  font-size: 2.5rem
  margin-top: 3rem
</style>
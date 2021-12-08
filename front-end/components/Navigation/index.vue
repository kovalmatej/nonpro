<template>
  <nav>
    <div class="wrap">
      <NuxtLink to="/" class="logo"><img src="/logoDark.svg" alt="nonpro logo" width="150"></NuxtLink>

      <ul>
        <li><NuxtLink to="/organizacie">Organizácie</NuxtLink></li>
        <li><NuxtLink :to="isLogged ? `/users/${userId}` : '/auth'"><img src="/user.svg" alt="User settings" width="20"></NuxtLink></li>
        <li v-show="isLogged" @click="logout"><NuxtLink to="/">Odhlásiť sa</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  name: "Navigation",
  computed: {
    userId() {
      return 1;
    }
  },
  props: {
    isLogged: { 
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations(["setToken", "setUsername"]),
    logout() {
      this.setToken(null);
      this.setUsername(null);
      
      this.$router.go()
    }
  }
}
</script>

<style scoped lang="sass">
nav
  width: 100%
  display: flex
  align-items: center
  background: #FFF
  -webkit-box-shadow: 0px 12px 20px -6px rgba(0,0,0,0.2)
  box-shadow: 0px 12px 20px -6px rgba(0,0,0,0.2)
  height: $navHeight
  position: relative
  .wrap
    display: flex
    justify-content: space-between
    padding: 0 2em
    height: calc(100% - #{$navBorder}) // Bottom border on navigation item
  ul
    display: flex
    padding-right: 4em
    li
      font-weight: bold
      display: flex
      justify-content: center
      align-items: center
      text-transform: uppercase
      height: 100%
      min-width: 10em
      a
        color: $darkBlue
        height: 100%
        width: 100%
        display: flex
        justify-content: center
        align-items: center
      &:hover
        border-bottom: $navBorder solid $darkBlue
.logo
  display: flex
  justify-content: center
  align-items: center
</style>

<template>
  <nav>
    <div class="wrap">
      <NuxtLink to="/" class="logo"><img src="/logoDark.svg" alt="nonpro logo" width="150"></NuxtLink>

      <ul class="desktop">
        <li><NuxtLink to="/organizacie">Organizácie</NuxtLink></li>
        <li><NuxtLink :to="isLogged ? `/users/${userId}` : '/auth'"><img src="/user.svg" alt="User settings" width="20"></NuxtLink></li>
        <li v-show="isLogged" @click="logout"><NuxtLink to="/">Odhlásiť sa</NuxtLink></li>
        <li class="burger-icon" @click="toggleNav"><div>☰</div></li>
      </ul>

       <ul class="mobile" :class="openNav ? '' : 'hidden'">
        <li><NuxtLink to="/organizacie">Organizácie</NuxtLink></li>
        <li><NuxtLink :to="isLogged ? `/users/${userId}` : '/auth'">Môj účet</NuxtLink></li>
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
  data(){
    return {
      openNav: false
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
    },
    toggleNav() {
      this.openNav = !this.openNav;
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
  ul.desktop
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

nav ul li.burger-icon
  font-size: 3rem
  min-width: 8rem
  cursor: pointer
  display: none

@media only screen and (max-width: 840px) 
  nav ul.desktop
    padding-right: 0

  nav ul.desktop li
    display: none

  nav ul li.burger-icon 
    display: flex
    &:hover
      border-bottom: none

  nav
    ul.mobile
      position: absolute
      top: $navHeight
      left: 0
      width: 100%
      height: 100vh
      background: #FFF
      li
        background: #FFF
        text-align: center
        padding: 1rem 0
        a
          color: #222
          font-weight: bold
          &:hover
            text-decoration: underline
.hidden
  display: none
</style>

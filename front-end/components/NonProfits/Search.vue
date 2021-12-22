<template>
  <div class="block">
    <h1>Vyhľadávanie</h1>

    <div class="search-container">
      <div class="container">
        <input type="text" v-model="searchQuery" @input="search">

        <img src="/search.svg" alt="Vyhľadať" width="25">
      </div>

      <div class="found">
        <nuxt-link class="founded-item" :to="`/organizacie/${found.id}`" :key="i" v-for="(found, i) in founded">
          {{ found.title }}
        </nuxt-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Search',
  data() {
    return {
      founded: [],
      searchQuery: "",
    }
  },
  props: {
    organizations: Array
  },
  methods: {
    search() {
      let foundedOrganizations = this.organizations.filter(org => {
        if((org.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || org.ico.includes(this.searchQuery)) && this.searchQuery.length > 2) {
          return org
        }
      });

      this.founded = foundedOrganizations.slice(0, 10);
    }
  }
}
</script>

<style lang="sass" scoped>
.founded-item
  background: #FFF
  padding: 1.3rem 1rem
  font-weight: 500
  border-bottom: 1px solid #eee
  cursor: pointer
  color: #222
  display: block
  &:hover
    background: #F1F1F1

.found
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2)

.search-container
  width: 100%

.block
  display: flex
  flex-direction: column
  flex: 1

.container
  position: relative
  display: inline-flex
  margin-top: 2rem
  width: 100%

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
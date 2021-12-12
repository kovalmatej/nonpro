<template>
	<div class="block organization-info">
    <h1>
      {{ title }}
    </h1>

    <div class="ico">
      IČO: {{ ICO }}
    </div>

    <div class="table">
      <div class="row">
        <div class="left cell">Poloha</div>
        <div class="right cell">{{ city }} {{ street }}</div>
      </div>

      <div class="row">
        <div class="left cell">PSČ</div>
        <div class="right cell">{{ PSC }}</div>
      </div>

      <div class="row">
        <div class="left cell">Právna forma</div>
        <div class="right cell">{{ type }}</div>
      </div>
      
      <div class="row">
        <div class="left cell">Zameranie</div>
        <div class="right cell">{{ category }}</div>
      </div>
      
      <div class="row">
        <div class="left cell">IBAN</div>
        <div class="right cell">{{ IBAN }}</div>
      </div>
    </div>

    <div class="actions">
      <global-button
        type="secondary"
        text="Pridať údaje"
      ></global-button>

      <global-button
        type="secondary"
        text="Zmeniť údaje"
      ></global-button>
      
      <global-button
        type="ternary"
        text="Topovať organizáciu"
      ></global-button>

    </div>
  </div>
</template>

<script>
import GlobalButton from "../Global/GlobalButton.vue";

export default {
	name: "OrganizationInfo",
  components: {
    GlobalButton
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    ICO: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    PSC: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    IBAN: {
      type: String,
      required: true
    },
    computed: {
      hasPermission() {
        return true;
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.organization-info
  flex: 5
  flex-direction: column

.ico
  font-size: 1.2rem

.row
  display: flex

.row:nth-child(odd)
  background: #eee

.row:nth-child(even)
  background: #f9f9f9

.row:last-child
  border-radius: 0 0 0.5rem 0.5rem

.row:first-child
  border-radius: 0.5rem 0.5rem 0 0

.cell
  padding: 1rem 1.5rem
  flex: 1

.table
  width: 80%
  margin-top: 2rem

.left
  font-weight: bold

.actions
  display: flex
  gap: 1rem

@media only screen and (max-width: 1400px)
  .organization-info
    width: 90%
  .table
    width: 100%

@media only screen and (max-width: 700px)
  .block.organization-info
    padding: 1rem
    width: 95%
  .actions
    display: flex
    flex-direction: column
    gap: 1.5rem
    margin-top: 5rem
    button
      margin: 0

</style>

<template>
	<div class="container">
		<div class="auth-form block">
      <div class="auth-header">
        <div 
          class="header-item"
          :class="[showLoginForm ? 'active' : '']"
          @click="displayLoginForm"
        >
          Prihlásenie
        </div>
        <div 
          class="header-item"
          :class="[!showLoginForm ? 'active' : '']"
          @click="displayRegisterForm"
        >
          Registrácia 
        </div>
      </div>

      <div v-if="showLoginForm" class="login auth-content">
        <form class="auth-form">
          <div class="auth-block">
            <label for="e-mail">E-mail:</label>
            <input type="text" class="input-text">
          </div>

          <div class="auth-block">
            <label for="password">Password:</label>
            <input type="password" class="input-text">
          </div>

          <global-button
            type="secondary"
            text="Prihlásiť sa"
          ></global-button>
        </form>
      </div>

      <div v-if="!showLoginForm" class="register auth-content">
        <form class="auth-form">
          <div class="auth-block">
            <label for="e-mail">E-mail:</label>
            <input type="text" class="input-text">
          </div>

          <div class="auth-block">
            <label for="password">Password:</label>
            <input type="password" class="input-text">
          </div>

           <global-button
            type="secondary"
            text="Registrovať sa"
          ></global-button>
        </form>
      </div>

    </div>
	</div>
</template>

<script>
import GlobalButton from "../Global/GlobalButton.vue";

export default {
	name: "Auth",
  components: {
    GlobalButton
  },
  data() {
    return {
      showLoginForm: true
    }
  },
  methods: {
    displayLoginForm() {
      this.showLoginForm = true;
    },
    displayRegisterForm() {
      this.showLoginForm = false;
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: center

.auth-form.block
  display: flex
  flex: 1
  flex-direction: column
  margin-top: 3rem
  padding: 0
  max-width: 27rem

.auth-header
  display: flex

.header-item
  flex: 1
  display: flex
  justify-content: center
  align-items: center
  background: #F9F9F9
  padding: 2rem
  color: #222
  font-weight: bold
  cursor: pointer
  border-bottom: 5px solid transparent
  &:hover
    background: #F1F1F1

.header-item.active
  background: #F1F1F1
  border-bottom: 5px solid $darkPurple

.auth-content
  padding: 2rem
  display: flex
  flex-direction: column
  align-items: center

.auth-form
  display: flex
  flex: 1
  flex-direction: column
  gap: 2rem
  width: 100%

.auth-block
  display: flex
  flex-direction: column

label
  text-transform: uppercase
  font-weight: bold
  color: #666
</style>

import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    username: '',
    token: ''
  })(store)
}
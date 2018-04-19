let mutations = {
  saveToken (state, payload) {
    state.token = payload
  },
  saveUser (state, payload) {
    state.username = payload
  },
  saveOrigin (state, payload) {
    state.origin = payload
  }
}

export default mutations

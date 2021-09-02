const store = {
  namespaced: true,
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    setAuthenticated({ state, commit }, isAuthenticated) {
      commit("setAuthenticated", isAuthenticated);
      return Promise.resolve(state.isAuthenticated);
    },
  },
  modules: {},
};

export default store;

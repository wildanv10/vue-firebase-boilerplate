const defaultUser = {
  accessToken: null,
  email: null,
  name: null,
  phoneNumber: null,
};

const store = {
  namespaced: true,
  state: {
    user: { ...defaultUser },
  },
  mutations: {
    setUser(state, user) {
      Object.assign(state.user, user);
    },
  },
  actions: {
    login({ commit }, user = null) {
      const accessToken = user?.accessToken || null;
      const email = user?.email || null;
      const name = user?.name || null;
      const phoneNumber = user?.phoneNumber || null;
      const tmpUser = {
        accessToken,
        email,
        name,
        phoneNumber,
      };

      commit("setUser", tmpUser);
      return Promise.resolve();
    },
    logout({ commit }) {
      commit("setUser", defaultUser);
      return Promise.resolve();
    },
  },
};

export default store;

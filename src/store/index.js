import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      isAuthenticated: false,
    };
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
    isAuth(state) {
      return state.isAuthenticated;
    },
  },
});

export default store;

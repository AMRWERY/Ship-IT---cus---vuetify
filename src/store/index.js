import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
    };
  },

  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },

  getters: {
    isAuth(state) {
      return state.isAuthenticated;
    },
  },
});

export default store;

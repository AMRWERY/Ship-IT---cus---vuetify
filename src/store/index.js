import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      totalItems: 0,
    };
  },

  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    totalItemsInCart(state, payload) {
      state.totalItems = payload;
    },
  },

  getters: {
    isAuth(state) {
      return state.isAuthenticated;
    },
    totalItemsInCart(state) {
      return state.totalItems;
    },
  },
});

export default store;

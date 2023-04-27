import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      totalItemsCart: 0,
      totalWishList: 0,
    };
  },

  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    totalItemsInCart(state, payload) {
      state.totalItemsCart = payload;
    },
    totalItemsInWishList(state, payload) {
      state.totalWishList = payload;
    },
  },

  getters: {
    isAuth(state) {
      return state.isAuthenticated;
    },
    totalItemsInCart(state) {
      return state.totalItemsCart;
    },
    totalItemsInWishList(state) {
      return state.totalWishList;
    },
  },
});

export default store;

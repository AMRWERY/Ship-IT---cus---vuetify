<template>
  <div>
    <v-toolbar color="indigo-lighten-2">
      <v-toolbar-title
        ><v-icon icon="mdi mdi-van-utility" start></v-icon>
        Ship-IT</v-toolbar-title
      >
      <v-spacer />

      <v-btn icon to="/profile" v-if="isAuthenticated">
        <v-icon icon="mdi mdi-account-circle" color="indigo-darken-1"></v-icon>
      </v-btn>
      <v-btn icon to="/cart" v-if="isAuthenticated">
        <v-badge :content="totalItems" color="orange-lighten-1">
          <v-icon icon="mdi mdi-cart-outline" color="purple-lighten-1"></v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon to="/wishlist" v-if="isAuthenticated">
        <v-badge :content="totalItemsInWishList" color="orange-lighten-1">
          <v-icon icon="mdi mdi-heart-outline" color="red-lighten-1"></v-icon>
        </v-badge>
      </v-btn>

      <v-btn
        icon="mdi mdi-logout"
        to="/login"
        @click="logOut"
        v-if="isAuthenticated"
      >
      </v-btn>
    </v-toolbar>
  </div>

  <div>
    <v-toolbar v-if="isAuthenticated">
      <v-row align="center" justify="center">
        <v-col cols="12" class="py-2 d-flex align-center justify-center">
          <v-btn-toggle v-model="text" rounded="0" group>
            <v-btn value="left" to="/home">Home</v-btn>

            <v-btn value="left" to="/shop">Shop</v-btn>

            <v-btn value="right" to="product">Product</v-btn>

            <v-btn value="justify" to="/blog">Blog</v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default {
  name: "Toolbar",

  data() {
    return {
      isAuthenticated: false,
      totalItems: 0,
      totalItemsInWishList: 0,
    };
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuth;
    },
    totalItemsInCart() {
      return this.$store.getters.totalItemsInCart;
    },
    totalItemsInWishList() {
      return this.$store.getters.totalItemsInWishList;
    },
  },

  mounted() {
    if (sessionStorage.getItem("userCredential")) {
      this.$store.commit("setIsAuthenticated", true);
    }

    let cart = JSON.parse(sessionStorage.getItem("cartData"));

    if (cart) {
      this.totalItems = cart.length;
      this.$store.commit("totalItemsInCart", cart.length);
    }

    let wishList = JSON.parse(sessionStorage.getItem("wishListData"));
    if (wishList) {
      this.totalItemsInWishList = wishList.length;
      this.$store.commit("totalItemsInWishList", wishList.length);
    }
  },

  watch: {
    isAuthenticated(newVal, oldVal) {
      this.isAuthenticated = newVal;
    },
    totalItemsInCart(newVal, oldVal) {
      this.totalItems = newVal;
    },
    totalItemsInWishList(newVal, oldVal) {
      this.totalItemsInWishList = newVal;
    },
  },

  methods: {
    logOut() {
      return signOut(auth)
        .then(() => {
          this.$store.commit("setIsAuthenticated", false);
          sessionStorage.clear();
          this.$router.replace("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

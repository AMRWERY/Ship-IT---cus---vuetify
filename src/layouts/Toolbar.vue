<template>
  <div>
    <v-toolbar color="indigo-lighten-2">
      <v-toolbar-title><v-icon icon="mdi mdi-van-utility" start></v-icon>
        Ship-IT</v-toolbar-title>
      <v-spacer />

      <!-- change theme -->

      <v-btn icon @click="toggleTheme">
        <v-icon icon="mdi mdi-weather-night">
        </v-icon>
      </v-btn>

      <v-btn icon v-if="isAuthenticated" to="/profile">
        <v-icon icon="mdi mdi-account-circle"></v-icon>
      </v-btn>
      <v-btn icon to="/cart" v-if="isAuthenticated">
        <v-badge :content="2" color="orange-lighten-1">
          <v-icon icon="mdi mdi-cart-outline"></v-icon>
        </v-badge>
      </v-btn>

      <v-menu transition="scale-transition" v-if="isAuthenticated">
        <template v-slot:activator="{ props }">
          <span v-bind="props" style="cursor: pointer" class="mx-5 mr-10">
            <v-chip link>
              <span>Hi, username</span>
            </v-chip>
          </span>
        </template>

        <v-list style="cursor: pointer">
          <v-list-item-content>
            <v-list-item-title class="text-center">Hi, username</v-list-item-title>
            <v-list-item-subtitle class="text-center ma-2"><v-chip color="green">Logged
                In</v-chip></v-list-item-subtitle>
          </v-list-item-content>
          <v-divider />
          <v-list-item v-for="item in menuItems" :key="item" :prepend-icon="item.icon" :to="item.route">
            <v-list-item-title>{{ item.title
            }}</v-list-item-title>
          </v-list-item>
          <v-btn rounded="lg" variant="tonal" color="purple-darken-4" prepend-icon="mdi mdi-logout" block
            @click="logOut">Log Out</v-btn>
        </v-list>
      </v-menu>

    </v-toolbar>
  </div>

  <div>
    <v-toolbar v-if="isAuthenticated">
      <v-row align="center" justify="center">
        <v-col cols="12" class="py-2 d-flex align-center justify-center">

          <v-btn-toggle v-model="text" rounded="0" group>
            <v-btn value="left" to="/">
              Home
            </v-btn>

            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  Shop
                </v-btn>
              </template>

              <v-list>
                <v-list-item style="cursor: pointer" v-for="(item, index) in items" :key="index" to="/shop">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-btn value="right" to="product">
              Product
            </v-btn>

            <v-btn value="justify" to="/blog">
              Blog
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from '../firebase/config';
import { useTheme } from 'vuetify'

export default {
  name: 'Toolbar',

  //change theme

  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },

  data() {
    return {
      items: [
        { title: 'T-Shirts' },
        { title: 'Jackets' },
        { title: 'Shirts' },
        { title: 'Jeans' },
        { title: 'Shoes' },
      ],
      isAuthenticated: false,
      menuItems: [
        { title: 'Add-Product', icon: 'mdi mdi-plus', route: '/add-product' },
        { title: 'Wishlist', icon: 'mdi mdi-list-status', route: '/wishlist' },
      ]
    }
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuth
    }
  },

  mounted() {
    if (localStorage.getItem('userCredential')) {
      this.$store.commit("setIsAuthenticated", true);
    }
  },

  watch: {
    isAuthenticated(newVal, oldVal) {
      this.isAuthenticated = newVal;
      console.log(oldVal)
    }
  },

  methods: {
    logOut() {
      return signOut(auth).then(() => {
        this.$store.commit("setIsAuthenticated", false);
        localStorage.clear()
        this.$router.replace('/login')
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}
</script>

<template>
  <v-container class="mt-16">
    <v-row>
      <v-col xs="12">
        <h2 class="text-red text-center">Login</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2" class="flex-column">
        <v-card max-width="600" class="justify-center align-center">
          <form @submit.prevent="signIn">
            <v-col>
              <v-text-field label="Email" type="email" required variant="outlined" v-model.trim="email"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Password" type="password" required variant="outlined"
                v-model.trim="password"></v-text-field>
            </v-col>
            <v-col>
              <v-btn color="indigo-lighten-1" block type="submit" class="text-capitalize float-right mb-4"
                :disabled="!formIsValid" @click="signIn">Login</v-btn>
            </v-col>
          </form>
          <v-card-text>
            <h4 class="text-center text-subtitle-1 mt-6">
              No account yet? <router-link class="text-decoration-none" to="/">Sign Up</router-link>
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
      <progress-circular v-if="loading" />
    </v-row>
  </v-container>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (Object.keys(user).length) {
            this.$store.commit("setIsAuthenticated", true);
            this.$router.replace("/home");
            sessionStorage.setItem(
              "userCredential",
              JSON.stringify(userCredential)
            );
          } else {
            this.$store.commit("setIsAuthenticated", false);
            this.$router.replace("/login");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
  },

  computed: {
    formIsValid() {
      return this.email !== "" && this.password !== "";
    },
  },
};
</script>

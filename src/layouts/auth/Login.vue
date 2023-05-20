<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Sign In</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col
        xs="12"
        sm="10"
        md="8"
        offset-sm="1"
        offset-md="2"
        class="flex-column justify-center align-center"
      >
        <v-card color="teal-lighten-5">
          <form @submit.prevent="signIn">
            <v-col>
              <v-text-field
                label="Email"
                type="email"
                required
                v-model.trim="email"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Password"
                type="password"
                required
                v-model.trim="password"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn
                color="indigo-lighten-1"
                type="submit"
                :disabled="!formIsValid"
                @click="signIn"
                >Login</v-btn
              >
            </v-col>
          </form>
        </v-card>
        <h4 class="text-center text-subtitle-1 mt-6">
          No account yet? <router-link to="/">Sign Up</router-link>
        </h4>
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

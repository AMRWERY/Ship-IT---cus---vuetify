<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Sign Up</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2" class="flex-column justify-center align-center">
        <v-card>
          <form @submit.prevent="signUp">
            <v-col>
              <v-text-field label="Email" type="email" required v-model.trim="email"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Password" type="password" required v-model.trim="password"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Confirm Password" type="password" required v-model.trim="confirmPassword"
                :rules="[comparePasswords]"></v-text-field>
            </v-col>
            <v-col>
              <v-btn color="indigo-lighten-1" type="submit" :disabled="!formIsValid">Register</v-btn>
            </v-col>
          </form>
        </v-card>
        <h4 class="text-center text-subtitle-1 mt-6">Already have account? <router-link to="/login">Sign In</router-link>
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'

export default {
  name: 'Register',

  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },

  methods: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential.user)
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  },

  computed: {
    formIsValid() {
      return this.email !== '' && this.password !== '' && this.confirmPassword !== ''
    },
    comparePasswords() {
      return this.confirmPassword !== this.password ? 'Passwords dose not match' : ''
    },
  },
}
</script>

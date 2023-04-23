<template>
  <v-row>
    <v-col cols="12" md="8">
      <h2 class="text-red ma-2 text-h3">Edit profile</h2>
      <h6 class="ma-2 text-h6">Edit your profile</h6>
    </v-col>
  </v-row>
  <v-row align="center" justify="center">
    <v-col>
      <v-sheet width="700" class="mx-auto">
        <v-form @submit.prevent="submitForm">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="User Name"
                variant="outlined"
                type="text"
                required
                v-model.trim="userName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label=" First Name"
                variant="outlined"
                type="text"
                required
                v-model.trim="firstName"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                label=" Last Name"
                variant="outlined"
                type="text"
                required
                v-model.trim="lastName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Email Address"
                variant="outlined"
                type="email"
                required
                v-model.trim="email"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea
                label="Address"
                variant="outlined"
                type="text"
                required
                v-model.trim="address"
              ></v-textarea>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                label="Country"
                variant="outlined"
                type="text"
                required
                v-model.trim="country"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="City"
                variant="outlined"
                type="text"
                required
                v-model.trim="city"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Postal Code"
                variant="outlined"
                type="number"
                v-model="postalCode"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn
            :disabled="!formIsValid"
            type="submit"
            class="ma-2"
            color="purple-lighten-1"
            >Edit profile</v-btn
          >
        </v-form>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      country: "",
      city: "",
      postalCode: null,
    };
  },

  methods: {
    submitForm() {},
  },

  computed: {
    formIsValid() {
      return (
        this.userName != "" &&
        this.firstName != "" &&
        this.lastName != "" &&
        this.email != "" &&
        this.country != "" &&
        this.city != ""
      );
    },
  },
};
</script>

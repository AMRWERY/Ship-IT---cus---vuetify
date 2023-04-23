<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col>
        <form @submit.prevent="submitForm">
          <v-responsive class="mx-auto ma-5" max-width="344">
            <v-text-field
              variant="outlined"
              clearable
              label="Payment Amount $ (USD)"
              type="number"
              v-model="paymentAmount"
            ></v-text-field>
            <p class="text-center">You will be charged $10</p>
          </v-responsive>
          <v-col class="justify-center d-flex">
            <v-btn
              type="submit"
              variant="tonal"
              color="purple-lighten-1"
              class="ma-3"
              :disabled="!formIsValid"
              >Pay Now</v-btn
            >
          </v-col>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Paypal",

  data() {
    return {
      paymentAmount: "",
    };
  },

  methods: {
    submitForm() {},
  },

  computed: {
    formIsValid() {
      return this.paymentAmount != "";
    },
  },
};
</script>

<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col>
        <form @submit.prevent="submitForm">
          <v-col>
            <v-text-field
              label="Payment Amount $ (USD)"
              type="number"
              variant="outlined"
              required
              v-model="paymentAmount"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Name on Card"
              type="text"
              variant="outlined"
              required
              v-model="cardName"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Card Number (No spaces or hypens)"
              type="number"
              variant="outlined"
              required
              v-model="cardNumber"
            ></v-text-field>
          </v-col>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Exp Date (MM/YY)"
                type="number"
                variant="outlined"
                required
                v-model="expDate"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Card Code (CVC)"
                type="number"
                variant="outlined"
                required
                v-model="cardCode"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn variant="tonal" class="ma-3 bg-teal-lighten-1">Cancel</v-btn>
          <v-btn
            type="submit"
            variant="tonal"
            :disabled="!formIsValid"
            class="ma-3 bg-indigo-lighten-1"
            >Pay Now</v-btn
          >
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreditCard",

  data() {
    return {
      paymentAmount: "",
      cardName: "",
      cardNumber: "",
      expDate: "",
      cardCode: "",
    };
  },

  methods: {
    submitForm() {
      this.$router.push("/order-tracking");
    },
  },

  computed: {
    formIsValid() {
      return (
        this.paymentAmount != "" &&
        this.cardName != "" &&
        this.cardNumber != "" &&
        this.expDate != "" &&
        this.cardCode != ""
      );
    },
  },
};
</script>

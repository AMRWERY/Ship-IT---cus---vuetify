<template>
  <v-container>
    <v-row>
      <v-col>
        <h4 class="text-h4">Make a Payment</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-tabs
            v-model="tab"
            bg-color="light-green-lighten-1"
            align-tabs="center"
          >
            <v-tab value="one">Credit Card</v-tab>
            <v-tab value="two">Paypal</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <CreditCard />
              </v-window-item>

              <v-window-item value="two">
                <Paypal />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreditCard from "./CreditCard.vue";
import Paypal from "./Paypal.vue";

export default {
  name: "Checkout",

  components: { CreditCard, Paypal },

  data() {
    return {
      tab: null,
    };
  },
};
</script>


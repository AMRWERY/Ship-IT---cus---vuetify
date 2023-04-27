<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center text-h3">Shopping Cart</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12" md="9" sm="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Price</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Total</th>
              <th class="text-left">#</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item">
              <td>
                <v-list-item
                  :prepend-avatar="item.img"
                  :title="item.title"
                  :subtitle="item.category"
                ></v-list-item>
              </td>
              <td>{{ item.price }}</td>
              <td>
                <v-text-field
                  class="pt-10"
                  style="width: 80px"
                  :value="item.cartQty"
                  type="number"
                  variant="outlined"
                ></v-text-field>
              </td>
              <td>${{ item.price * item.cartQty }}</td>
              <td>
                <v-btn
                  icon="mdi mdi-alpha-x"
                  color="red"
                  flat
                  @click="removeItem(itemId)"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col :cols="12" md="3" sm="12" style="background-color: #bbd6b8">
        <p class="headline text-center">Order Summary</p>
        <p class="overline">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>
        <v-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Order Subtotal</td>
                <td class="text-right" style="width: 50px">
                  ${{ totalAmount.total }}
                </td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td class="text-right" style="width: 50px">$10.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td class="text-right" style="width: 50px">$5.00</td>
              </tr>
              <tr>
                <td>Total Items</td>
                <td class="text-right" style="width: 50px">
                  <b>{{ totalItems }}</b>
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
        <div class="text-center">
          <v-btn
            class="text-white mt-5"
            color="deep-orange-lighten-2"
            flat=""
            to="/checkout"
            >Proceed To Pay</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cart",

  data() {
    return {
      cart: [],
      category: "",
      title: "",
      img: "",
      price: 0,
      cartQty: 0,
    };
  },

  computed: {
    totalAmount() {
      let total = 0;
      let amounts = {};

      this.cart.forEach((item) => {
        if (!amounts[item.category]) {
          amounts[item.category] = 0;
        }
        amounts[item.category] += item.price * item.cartQty;
        total += item.price * item.cartQty;
      });

      total = total.toFixed(2);

      return {
        total,
        amounts,
      };
    },
    totalItems() {
      return this.cart.reduce((total, item) => total + item.cartQty, 0);
    },
  },

  methods: {
    removeItem(itemId) {
      const index = this.cart.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        this.cart.splice(index, 1);
        localStorage.setItem("cartData", JSON.stringify(this.cart));
      }
    },
  },

  mounted() {
    if (localStorage.getItem("cartData")) {
      this.cart = JSON.parse(localStorage.getItem("cartData"));
    }
  },
};
</script>

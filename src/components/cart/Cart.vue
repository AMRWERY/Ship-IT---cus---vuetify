<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center text-h3">SHOPPING CART</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12" md="9" sm="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Item
              </th>
              <th class="text-left">
                Price
              </th>
              <th class="text-left">
                Quantity
              </th>
              <th class="text-left">
                Total
              </th>
              <th class="text-left">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" title="Item 1"
                  subtitle="Lorem Ipsum"></v-list-item>
              </td>
              <td>$40.00</td>
              <td><v-text-field class="pt-10" style="width: 80px" value="2" type="number"
                  variant="outlined"></v-text-field>
              </td>
              <td>$80.00</td>
              <td><a>X</a></td>
            </tr>
            <tr>
              <td>
                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" title="Item 1"
                  subtitle="Lorem Ipsum"></v-list-item>
              </td>
              <td>$30.00</td>
              <td><v-text-field class="pt-10" style="width: 80px" value="4" type="number"
                  variant="outlined"></v-text-field>
              </td>
              <td>$120.00</td>
              <td><a>X</a></td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col :cols="12" md="3" sm="12" style="background-color: #BBD6B8">
        <p class="headline text-center">Order Summary</p>
        <p class="overline">Shipping and additional costs are calculated based on values you have entered.
        </p>
        <v-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Order Subtotal</td>
                <td class="text-right" style="width: 50px">$160.00</td>
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
                <td>Total</td>
                <td class="text-right" style="width: 50px"><b>$175.00</b></td>
              </tr>
            </tbody>
          </template>
        </v-table>
        <div class="text-center">
          <v-btn class=" text-white mt-5" color="deep-orange-lighten-2" flat="">PROCEED TO PAY</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <Footer class="mt-16" />
</template>

<script>
import Footer from './Footer.vue';

export default {
  name: 'Cart',

  components: { Footer },
}
</script>

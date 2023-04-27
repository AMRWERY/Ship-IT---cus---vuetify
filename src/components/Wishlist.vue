<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center text-h3">Wishlist</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Price</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in wishList" :key="item">
              <td>
                <v-list-item
                  :prepend-avatar="item.img"
                  :title="item.title"
                  :subtitle="item.category"
                ></v-list-item>
              </td>
              <td>${{ item.price }}</td>
              <td>
                <v-btn color="red" flat @click="addToCart(item)"
                  ><v-icon icon="mdi mdi-plus"></v-icon>Add to Cart</v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
  <Footer class="mt-16" />
</template>

<script>
import Footer from "../layouts/Footer.vue";

export default {
  name: "Wishlist",

  components: { Footer },

  data() {
    return {
      wishList: [],
      title: "",
      img: "",
      price: 0,
      cart: [],
      chosenItems: 1,
      productDetails: null,
    };
  },

  methods: {
    addToCart(product) {
      let index = this.cart.indexOf(product);

      if (index != -1) {
        this.cart[index]["totalPrice"] =
          Number(this.cart[index].cartQty) * Number(this.cart[index].price);
        this.cart[index].cartQty =
          Number(this.chosenItems) + Number(this.cart[index].cartQty);
        Number(this.cart[index]["cart"]) * Number(this.cart[index]["price"]);
      } else {
        product["cartQty"] = Number(this.chosenItems);
        product["totalPrice"] = Number(product.cartQty) * Number(product.price);
        this.cart.push(product);
      }
      localStorage.setItem("cartData", JSON.stringify(this.cart));
      console.log(this.cart);
      this.$store.commit("totalItemsInCart", this.cart.length);
    },
  },

  mounted() {
    if (localStorage.getItem("wishListData")) {
      this.wishList = JSON.parse(localStorage.getItem("wishListData"));
    }
  },
};
</script>


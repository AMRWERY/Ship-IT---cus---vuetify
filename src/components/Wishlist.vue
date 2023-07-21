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
              <th class="text-left">#</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in wishList" :key="item">
              <td>
                <v-list-item :prepend-avatar="item.img" :title="item.title" :subtitle="item.category"></v-list-item>
              </td>
              <td>${{ item.price }}</td>
              <td>
                <v-tooltip text="Add to Cart" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn color="red" icon="mdi mdi-plus" density="comfortable" v-bind="props"
                      @click="addToCart(item)" />
                  </template>
                </v-tooltip>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Wishlist",

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
      for (const item of this.wishList) {
        let index = this.cart.indexOf(item);
        if (index != -1) {
          this.cart[index]["totalPrice"] =
            Number(this.cart[index].cartQty) * Number(this.cart[index].price);
          this.cart[index].cartQty =
            Number(this.chosenItems) + Number(this.cart[index].cartQty);
          Number(this.cart[index]["cart"]) * Number(this.cart[index]["price"]);
        } else {
          item["cartQty"] = Number(this.chosenItems);
          item["totalPrice"] = Number(item.cartQty) * Number(item.price);
          this.cart.push(item);
        }
        const wishlistIndex = this.wishList.indexOf(item);
        if (wishlistIndex !== -1) {
          this.wishList.splice(wishlistIndex, 1);
        }
      }
      sessionStorage.setItem("cartData", JSON.stringify(this.cart));
      sessionStorage.setItem("wishListData", JSON.stringify(this.wishList));
      this.$store.commit("totalItemsInCart", this.cart.length);
    },
  },

  mounted() {
    if (sessionStorage.getItem("wishListData")) {
      this.wishList = JSON.parse(sessionStorage.getItem("wishListData"));
    }
  },
};
</script>


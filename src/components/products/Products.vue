<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="5" md="6" sm="12" xs="12">
          <v-card class="h-100 w-100">
            <v-img :src="productDetails?.img" />
          </v-card>
        </v-col>
        <v-col cols="12" lg="7" md="6" sm="12" xs="12">
          <v-breadcrumbs :items="['Home', 'Clothing', 'T-Shirts']"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0 text-h5">{{ productDetails?.title }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                ${{ productDetails?.price }}
                <del style="" class="subtitle-1 font-weight-thin"><strong>${{ productDetails?.originalPrice
                }}</strong></del>
              </p>
              <v-spacer />
              <v-rating v-model="rating" background-color="warning lighten-3" color="warning" dense></v-rating>
              <span class="body-2 font-weight-thin">
                {{ productDetails?.rate }} REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-italic">
              {{ productDetails?.dec }}
            </p>
            <p class="text-h5 mt-5">
              Quantity:
              <v-chip variant="elevated" color="red-lighten-4" class="text-white">
                {{ productDetails?.qty }}
              </v-chip>
            </p>
            <p class="text-h5 mt-5">Size</p>
            <v-radio-group inline>
              <v-radio label="XS" value="1"></v-radio>
              <v-radio label="S" value="2"></v-radio>
              <v-radio label="M" value="3"></v-radio>
              <v-radio label="L" value="4"></v-radio>
              <v-radio label="XL" value="5"></v-radio>
            </v-radio-group>
            <p class="text-h5 mt-5">Items</p>
            <v-text-field v-model="chosenItems" type="number" variant="outlined" style="width: 100px"
              dense></v-text-field>
            <v-btn color="purple-lighten-3" class="text-capitalize" @click="addToCartAndShowSnackbar"><v-icon>mdi
                mdi-cart-outline</v-icon>Add to Cart</v-btn>
            <v-snackbar v-model="snackbar" :timeout="timeout">
              {{ text }}
              <template v-slot:actions>
                <v-btn color="blue" variant="text" @click="snackbar = false">
                  Close
                </v-btn>
              </template>
            </v-snackbar>
            <v-btn color="orange-lighten-3" class="ml-4 text-capitalize"
              @click="addToWishListAndShowSnackbar"><v-icon>"mdi
                mdi-heart-outline</v-icon>Add
              to Wishlist</v-btn>
            <v-snackbar v-model="snackbar" :timeout="timeout">
              {{ text }}
              <template v-slot:actions>
                <v-btn color="blue" variant="text" @click="snackbar = false">
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12" sm="12" md="12">
          <v-tabs v-model="tab">
            <v-tab value="one" class="text-capitalize">Description</v-tab>
            <v-tab value="two" class="text-capitalize">Materials</v-tab>
            <v-tab value="three" class="text-capitalize">Reviews</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <Description />
              </v-window-item>

              <v-window-item value="two">
                <Materials />
              </v-window-item>

              <v-window-item value="three">
                <Reviews />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <MightLike />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Description from "./Description.vue";
import Materials from "./Materials.vue";
import Reviews from "./Reviews.vue";
import MightLike from "./MightLike.vue";

export default {
  name: "Products",

  components: { Description, Materials, Reviews, MightLike },

  data() {
    return {
      rating: 3,
      tab: null,
      id: this.$route.params.id,
      productDetails: null,
      cart: [],
      totalItems: null,
      chosenItems: 1,
      wishList: [],
      snackbar: false,
      text: 'item added',
      timeout: 2000,
    };
  },

  methods: {
    async getProduct() {
      const docSnap = await getDoc(doc(db, "products", this.id));
      if (docSnap.exists()) {
        this.productDetails = docSnap.data();
      } else {
        console.log("Document does not exist");
      }
    },
    addToCart() {
      let index = this.cart.indexOf(this.productDetails);

      if (index != -1) {
        this.cart[index]["totalPrice"] =
          Number(this.cart[index].cartQty) * Number(this.cart[index].price);
        this.cart[index].cartQty =
          Number(this.chosenItems) + Number(this.cart[index].cartQty);
        Number(this.cart[index]["cart"]) * Number(this.cart[index]["price"]);
      } else {
        this.productDetails["cartQty"] = Number(this.chosenItems);
        this.productDetails["totalPrice"] =
          Number(this.productDetails.cartQty) *
          Number(this.productDetails.price);
        this.cart.push(this.productDetails);
      }
      sessionStorage.setItem("cartData", JSON.stringify(this.cart));
      console.log(this.cart);
      this.$store.commit("totalItemsInCart", this.cart.length);
    },
    addToWishList() {
      let index = this.wishList.indexOf(this.productDetails);

      if (index == -1) {
        this.wishList.push(this.productDetails);
        sessionStorage.setItem("wishListData", JSON.stringify(this.wishList));
        this.$store.commit("totalItemsInWishList", this.wishList.length);
      }
    },
    addToCartAndShowSnackbar() {
      this.addToCart();
      this.snackbar = true;
    },
    addToWishListAndShowSnackbar() {
      this.addToWishList();
      this.snackbar = true;
    },
  },

  mounted() {
    this.getProduct();

    if (sessionStorage.getItem("cartData")) {
      this.cart = JSON.parse(sessionStorage.getItem("cartData"));
    }

    if (sessionStorage.getItem("wishListData")) {
      this.wishList = JSON.parse(sessionStorage.getItem("wishListData"));
    }
  },
};
</script>

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
          <v-breadcrumbs
            :items="['Home', 'Clothing', 'T-Shirts']"
          ></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">{{ productDetails?.title }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                ${{ productDetails?.price }}
                <del style="" class="subtitle-1 font-weight-thin"
                  >${{ productDetails?.originalPrice }}</del
                >
              </p>
              <v-spacer />
              <v-rating
                v-model="rating"
                class=""
                background-color="warning lighten-3"
                color="warning"
                dense
              ></v-rating>
              <span class="body-2 font-weight-thin">
                {{ productDetails?.rate }} REVIEWS</span
              >
            </v-card-actions>
            <p class="subtitle-1 font-italic">
              {{ productDetails?.dec }}
            </p>
            <p class="text-h5 mt-5">
              Quantity:
              <v-chip variant="elevated">
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
            <v-text-field
              v-model="chosenItems"
              type="number"
              variant="outlined"
              style="width: 100px"
              dense
            ></v-text-field>
            <v-btn color="purple-lighten-3" @click="addToCart"
              ><v-icon>mdi mdi-cart-outline</v-icon>Add to Cart</v-btn
            >
            <v-btn color="orange-lighten-3" class="ml-4" @click="addToWishList"
              ><v-icon>mdi mdi-list-box-outline</v-icon>Add to Wishlist</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12" sm="12" md="12">
          <v-tabs v-model="tab">
            <v-tab value="one">Description</v-tab>
            <v-tab value="two">Materials</v-tab>
            <v-tab value="three">Reviews</v-tab>
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
      localStorage.setItem("cartData", JSON.stringify(this.cart));
      console.log(this.cart);
      this.$store.commit("totalItemsInCart", this.cart.length);
    },
    addToWishList() {
      let index = this.wishList.indexOf(this.productDetails);

      if (index == -1) {
        this.wishList.push(this.productDetails);
        localStorage.setItem("wishListData", JSON.stringify(this.wishList));
        this.$store.commit("totalItemsInWishList", this.wishList.length);
      }
    },
  },

  mounted() {
    this.getProduct();

    if (localStorage.getItem("cartData")) {
      this.cart = JSON.parse(localStorage.getItem("cartData"));
    }

    if (localStorage.getItem("wishListData")) {
      this.wishList = JSON.parse(localStorage.getItem("wishListData"));
    }
  },
};
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="5" md="6" sm="12" xs="12">
          <v-card class="h-100 w-100">
            <v-carousel show-arrows="hover">
              <v-carousel-item src="../../public/slider01.jpg" cover></v-carousel-item>

              <v-carousel-item src="../../public/slider02.jpg" cover></v-carousel-item>

              <v-carousel-item src="../../public/slider03.jpg" cover></v-carousel-item>

              <v-carousel-item src="../../public/slider04.jpg" cover></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" lg="7" md="6" sm="12" xs="12">
          <v-breadcrumbs :items="['Home', 'Clothing', 'T-Shirts']"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">Modern Black T-Shirt</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">$65.00 <del style=""
                  class="subtitle-1 font-weight-thin">$80.00</del></p>
              <v-spacer></v-spacer>
              <v-rating v-model="rating" class="" background-color="warning lighten-3" color="warning" dense></v-rating>
              <span class="body-2	font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam.
              Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.
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
            <v-text-field :value="2" variant="outlined" style="width: 100px" dense></v-text-field>
            <v-btn color="purple-lighten-3"><v-icon>mdi
                mdi-cart-outline</v-icon> Add to
              Cart</v-btn>
            <v-btn color="orange-lighten-3" class="ml-4"><v-icon>mdi mdi-list-box-outline</v-icon> Add to
              Wishlist</v-btn>
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
import Description from './Description.vue';
import Materials from './Materials.vue';
import Reviews from './Reviews.vue';
import MightLike from './MightLike.vue'

export default {
  name: 'Products',

  components: { Description, Materials, Reviews, MightLike },

  data() {
    return {
      rating: 3,
      tab: null,
    }
  }
}
</script>



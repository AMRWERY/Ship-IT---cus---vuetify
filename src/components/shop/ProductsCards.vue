<template>
  <v-breadcrumbs :items="['Shopping', 'T-Shirts']" class="pb-0"></v-breadcrumbs>
  <v-row dense>
    <v-col cols="12" sm="8" class="pl-6 pt-6">
      <small>Showing 1-12 of 200 products</small>
    </v-col>
    <v-col cols="12" sm="4">
      <v-select :items="options" density="compact" dense variant="outlined"></v-select>
    </v-col>
  </v-row>
  <v-divider />
  <v-row class="text-center">
    <v-col cols="12" lg="3" md="6" sm="12" xs="12" v-for="pro in products" :key="pro">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto" color="grey-lighten-4" max-width="600" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover height="200px" :src="pro.img">
            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-blue-lighten-5 v-card--reveal"
                style="height: 100%;">

                <!-- <v-btn variant="outlined" :to="'/product/' + id">Check</v-btn> -->

                <!-- <v-btn variant="outlined" :to="{ name: 'Products', params: { id: pro.id } }">Check</v-btn> -->

                <router-link :to="{ name: 'Products', params: { id: pro.id } }">
                  <v-btn variant="outlined">Check</v-btn>
                </router-link>


              </div>
            </v-expand-transition>
          </v-img>

          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              {{ pro.name }}
            </div>

            <div class="font-weight-light text-h6 mb-2">
              ${{ pro.price }}
            </div>
            <div class="font-weight-light text-h6 mb-2">
              In Stock: {{ pro.qty }}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
  data() {
    return {
      options: [
        'Default',
        'Popularity',
        'Relevance',
        'Price: Low to High',
        'Price: High to Low',
      ],
      products: [],
      /* products: [
        {
          id: 1,
          name: 'Black Tee',
          type: 'Jackets',
          price: '18.00',
          src: '../../public/shop/01.jpg'
        },
        {
          id: 2,
          name: 'White Tee',
          type: 'Polo',
          price: '40.00',
          src: '../../public/shop/02.jpg'
        },
        {
          id: 3,
          name: 'Zara limited...',
          type: 'Denim',
          price: '25.00',
          src: '../../public/shop/03.jpg'
        },
        {
          id: 4,
          name: 'Skull Tee',
          type: 'Jackets',
          price: '30.00',
          src: '../../public/shop/04.jpg'
        },
        {
          id: 5,
          name: 'Mango Winter',
          type: 'Sweaters',
          price: '50.00',
          src: '../../public/shop/05.jpg'
        },
        {
          id: 6,
          name: 'Shirt',
          type: 'Denim',
          price: '34.00',
          src: '../../public/shop/06.jpg'
        },
        {
          id: 7,
          name: 'Trucker Jacket',
          type: 'Jackets',
          price: '38.00',
          src: '../../public/shop/07.jpg'
        },
        {
          id: 8,
          name: 'Coats',
          type: 'Jackets',
          price: '25.00',
          src: '../../public/shop/08.jpg'
        },
        {
          id: 9,
          name: 'Mango Winter',
          type: 'Sweaters',
          price: '50.00',
          src: '../../public/shop/09.jpg'
        },
        {
          id: 10,
          name: 'Shirt',
          type: 'Denim',
          price: '34.00',
          src: '../../public/shop/010.jpg'
        },
        {
          id: 11,
          name: 'Trucker Jacket',
          type: 'Jackets',
          price: '38.00',
          src: '../../public/shop/011.jpg'
        },
        {
          id: 12,
          name: 'Coats',
          type: 'Jackets',
          price: '25.00',
          src: '../../public/shop/012.jpg'
        },
      ], */
    }
  },

  methods: {
    async getData() {
      const querySnap = await getDocs(query(collection(db, 'products')));

      querySnap.forEach((doc) => {
        this.products.push(doc.data())
      })
    }
  },

  created() {
    this.getData()
    console.log(this.data)
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>


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
        <v-card class="mx-auto" max-width="600" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover height="200px" :src="pro.imgList[0]">
            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-blue-lighten-5 v-card--reveal"
                style="height: 100%;">

                <v-btn variant="outlined" :to="{ name: 'Products', params: { id: pro.id } }">Check</v-btn>

              </div>
            </v-expand-transition>
          </v-img>

          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              <v-chip variant="elevated" color="primary">
                {{ pro.title }}
              </v-chip>

            </div>

            <div class="font-weight-light text-h6 mb-2">
              ${{ pro.price }}
            </div>
            <div class="font-weight-light text-h6 mb-2">
              In Stock: {{ pro.qty }} Pieces
            </div>
            <div class="font-weight-light text-h6 mb-2">
              Category: {{ pro.category }}
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
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      const querySnap = await getDocs(query(collection(db, 'products')));

      querySnap.forEach(doc => {
        let pro = {
          id: doc.id,
          ...doc.data(doc.id)
        }
        console.log(doc.id)
        this.products.push(pro)
      })
      /* console.log(this.products) */
    }
  },
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


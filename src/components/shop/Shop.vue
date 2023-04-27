<template>
  <v-container>
    <v-row>
      <v-col md="3" sm="3" xs="12">
        <v-card variant="outlined">
          <v-card-title class="pb-0">Filters</v-card-title>
          <v-divider />
          <v-list style="cursor: pointer">
            <v-list-item @click="showAllItems">All</v-list-item>
            <v-list-item
              v-for="item in category"
              :key="item"
              @click="filteredItems(item.title)"
              >{{ item.title }}</v-list-item
            >
          </v-list>

          <v-divider />
          <v-row class="pa-2" dense>
            <v-col cols="12" sm="5">
              <v-text-field
                :value="range[0]"
                label="Min"
                variant="outlined"
                dense
                @change="$set(range, 0, $event)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <p class="pt-2 text-center">TO</p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field
                :value="range[1]"
                label="Max"
                variant="outlined"
                dense
                @change="$set(range, 1, $event)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider />
          <v-card-title class="pb-0">Customer Rating</v-card-title>
          <v-container fluid class="pt-0">
            <v-checkbox
              append-icon="mdi mdi-star"
              label="4 & above"
              hide-details
              dense
            ></v-checkbox>
            <v-checkbox
              append-icon="mdi mdi-star"
              label="3 & above"
              hide-details
              dense
            ></v-checkbox>
            <v-checkbox
              append-icon="mdi mdi-star"
              label="2 & above"
              hide-details
              dense
            ></v-checkbox>
            <v-checkbox
              append-icon="mdi mdi-star"
              label="1 & above"
              hide-details
              dense
            ></v-checkbox>
          </v-container>
        </v-card>
      </v-col>

      <v-col md="9" sm="9" xs="12">
        <ProductsCards :products="filteredItemsArray" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsCards from "./ProductsCards.vue";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
  name: "Shop",

  components: { ProductsCards },

  data() {
    return {
      value: null,
      range: [0, 10000],
      min: 0,
      max: 10000,
      products: [],
      filteredItemsArray: [],
      category: [
        { title: "Pants", value: 1 },
        { title: "Shirts", value: 2 },
        { title: "Jackets", value: 3 },
        { title: "Shoes", value: 4 },
        { title: "T-Shirts", value: 5 },
        { title: "Bags", value: 6 },
      ],
    };
  },

  methods: {
    filteredItems(value) {
      this.filteredItemsArray = this.products;
      return (this.filteredItemsArray = this.products.filter(
        (item) => item.category === value
      ));
    },
    async getData() {
      const querySnap = await getDocs(query(collection(db, "products")));

      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(doc.id),
        };
        console.log(doc.id);
        this.products.push(pro);
        this.filteredItemsArray.push(pro);
      });
    },
    showAllItems() {
      this.filteredItemsArray = this.products;
    },
  },

  mounted() {
    this.getData();
  },
};
</script>


<template>
  <v-container>
    <v-row>
      <v-col md="3" sm="3" xs="12">
        <v-card variant="outlined">
          <v-card-title class="pb-0">Filters</v-card-title>
          <v-divider />
          <v-list :items="items"></v-list>
          <v-divider />
          <v-card-title class="pb-0">Price</v-card-title>
          <v-range-slider></v-range-slider>
          <v-row class="pa-2" dense>
            <v-col cols="12" sm="5">
              <v-text-field :value="range[0]" label="Min" variant="outlined" dense
                @change="$set(range, 0, $event)"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <p class="pt-2 text-center">TO</p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field :value="range[1]" label="Max" variant="outlined" dense
                @change="$set(range, 1, $event)"></v-text-field>
            </v-col>
          </v-row>
          <v-divider />
          <v-card-title class="pb-0">Customer Rating</v-card-title>
          <v-container fluid class="pt-0">
            <v-checkbox append-icon="mdi mdi-star" label="4 & above" hide-details dense></v-checkbox>
            <v-checkbox append-icon="mdi mdi-star" label="3 & above" hide-details dense></v-checkbox>
            <v-checkbox append-icon="mdi mdi-star" label="2 & above" hide-details dense></v-checkbox>
            <v-checkbox append-icon="mdi mdi-star" label="1 & above" hide-details dense></v-checkbox>
          </v-container>
          <v-divider />
          <v-card-title class="pb-0">Size</v-card-title>
          <v-container fluid class="pt-0">
            <v-checkbox label="XS" dense></v-checkbox>
            <v-checkbox label="S" dense></v-checkbox>
            <v-checkbox label="M" dense></v-checkbox>
            <v-checkbox label="L" dense></v-checkbox>
            <v-checkbox label="XL" dense></v-checkbox>
            <v-checkbox label="XXL" dense></v-checkbox>
            <v-checkbox label="XXXL" dense></v-checkbox>
          </v-container>
        </v-card>
      </v-col>

      <v-col md="9" sm="9" xs="12">
        <ProductsCards />

        <Pagination />

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsCards from './ProductsCards.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'Shop',

  components: { ProductsCards, Pagination },

  data() {
    return {
      value: null,
      range: [0, 10000],
      min: 0,
      max: 10000,
      items: [
        { type: 'subheader', title: 'Shoes' },
        {
          title: 'Casuals',
          value: 1,
        },
        {
          title: 'Formals',
          value: 2,
        },
        {
          title: 'Sneakers',
          value: 3,
        },
        { type: 'divider' },
        { type: 'subheader', title: 'Clothing' },
        {
          title: 'Shirts',
          value: 4,
        },
        {
          title: 'Tops',
          value: 5,
        },
        {
          title: 'Tunics',
          value: 6,
        },
        {
          title: 'Bodysuit',
          value: 7,
        },
      ],
    }
  }
}
</script>


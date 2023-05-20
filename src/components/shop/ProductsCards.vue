<template>
  <v-breadcrumbs :items="['Shopping', 'T-Shirts']" class="pb-0"></v-breadcrumbs>
  <br />
  <v-divider />
  <v-row class="text-center">
    <v-col
      cols="12"
      lg="3"
      md="6"
      sm="12"
      xs="12"
      v-for="pro in products"
      :key="pro"
    >
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto" max-width="600" color="teal-lighten-5" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover height="200px" :src="pro.img">
            <v-expand-transition>
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-blue-lighten-5 v-card--reveal"
                style="height: 100%"
              >
                <v-btn
                  variant="outlined"
                  :to="{ name: 'Products', params: { id: pro.id } }"
                  >Check</v-btn
                >
              </div>
            </v-expand-transition>
          </v-img>

          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              <v-chip variant="elevated" color="primary">
                {{ pro.title }}
              </v-chip>
            </div>

            <div class="font-weight-light text-h6 mb-2">${{ pro.price }}</div>
            <div class="font-weight-light text-h6 mb-2">
              <strong>In Stock:</strong> {{ pro.qty }} Pieces
            </div>
            <div class="font-weight-light text-h6 mb-2">
              <strong>Category:</strong> {{ pro.category }}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      options: [
        "Default",
        "Popularity",
        "Relevance",
        "Price: Low to High",
        "Price: High to Low",
      ],
    };
  },

  props: { products: [] },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>


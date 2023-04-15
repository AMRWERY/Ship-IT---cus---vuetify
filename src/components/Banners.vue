<template>
  <v-container>
    <v-row class="pl-4 pr-4 row">
      <v-col cols="12" md="6" sm="12" xs="12" class="mt-4">
        <v-card>
          <v-img src="../../public/slider02.jpg" cover class="white-text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400px">
            <h1 class="text-center">Top Picks</h1>
            <div class="text-center white-text">
              <v-btn to="/shop" class="white-text">Shop Now</v-btn>
            </div>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12" xs="12" class="mt-4">
        <v-card>
          <v-img src="../../public/slider03.jpg" cover class="white-text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400px">
            <h1 class="text-center">New Arrivals</h1>
            <div class="text-center white-text">
              <v-btn to="/shop" class="white-text">Shop Now</v-btn>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Banners'
}
</script>

<template>
  <v-container>
    <v-row no-gutters class="mt-10">
      <v-col :cols="12">
        <h2>Deals of the day</h2>
        <v-divider :thickness="2" color="error"></v-divider>
        <v-row class="mt-4">
          <v-col cols="12" md="3" xs="6" sm="6" class="text-center">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                class="mx-auto"
                height="350"
                max-width="350"
                v-bind="props"
              >
                <v-img
                  src="https://justfields.com/storage/projects/7M5rV059/deal03.jpg"
                  class="text-white align-end text-left"
                  height="200px"
                  cover
                >
                  <v-card-title>Bags & Purses </v-card-title>
                </v-img>
                <v-card-text class="text-center">
                  <div>Upto 60% + Extra 10%</div>
                  <div>Baggit, Zara, Fossil</div>
                </v-card-text>
                <div class="text-center">
                  <v-btn to="/shop" class="ma-2" outlined> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="3" xs="6" sm="6" class="text-center">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                class="mx-auto"
                height="350"
                max-width="350"
                v-bind="props"
              >
                <v-img
                  src="https://justfields.com/storage/projects/7M5rV059/deal04.jpg"
                  class="text-white align-end text-left"
                  height="200px"
                  cover
                >
                  <v-card-title>T-Shirt</v-card-title>
                </v-img>
                <v-card-text class="text-center">
                  <div>Upto 50%</div>
                  <div>Zara, Selected, Celio</div>
                </v-card-text>
                <div class="text-center">
                  <v-btn to="/shop" class="ma-2" outlined> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="3" xs="6" sm="6" class="text-center">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                class="mx-auto"
                height="350"
                max-width="350"
                v-bind="props"
              >
                <v-img
                  src="https://justfields.com/storage/projects/7M5rV059/deal02.jpg"
                  class="text-white align-end text-left"
                  height="200px"
                  cover
                >
                  <v-card-title>Jeans</v-card-title>
                </v-img>
                <v-card-text class="text-center">
                  <div>Upto 60% + Extra 10%</div>
                  <div>Jack & Jones, Levis</div>
                </v-card-text>
                <div class="text-center">
                  <v-btn to="/shop" class="ma-2" outlined> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="3" xs="6" sm="6" class="text-center">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                class="mx-auto"
                height="350"
                max-width="350"
                v-bind="props"
              >
                <v-img
                  src="https://justfields.com/storage/projects/7M5rV059/deal01.jpg"
                  class="text-white align-end text-left"
                  height="200px"
                  cover
                >
                  <v-card-title>Shoes</v-card-title>
                </v-img>
                <v-card-text class="text-center">
                  <div>Upto 60% + Extra 10%</div>
                  <div>Nike, Adidas, Puma</div>
                </v-card-text>
                <div class="text-center">
                  <v-btn to="/shop" class="ma-2" outlined> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Today Deals",
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>

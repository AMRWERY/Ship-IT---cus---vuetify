<template>
  <p class="subtitle-1 font-weight-light pt-3 text-center text-capitalize ma-4">
    You might also like
  </p>
  <v-divider class="mb-3" />
  <v-row class="row text-center">
    <v-col cols="12">
      <v-row>
        <v-col class="text-center" cols="12" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              color="teal-lighten-5"
              v-bind="props"
            >
              <v-img
                src="https://justfields.com/storage/projects/7M5rV059/06.jpg"
                class="text-white align-end text-left"
                height="200px"
                cover
              >
                <v-card-title>Bags & Purses</v-card-title>
              </v-img>
              <v-card-text class="text-center">
                <div>Upto 60% + Extra 10%</div>
                <div>Baggit, Zara, Fossil</div>
              </v-card-text>
              <div class="text-center">
                <v-btn to="/shop" class="ma-2">Explore</v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="text-center" cols="12" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              color="teal-lighten-5"
              v-bind="props"
            >
              <v-img
                src="https://justfields.com/storage/projects/7M5rV059/07.jpg"
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
                <v-btn to="/shop" class="ma-2">Explore</v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="text-center" cols="12" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              color="teal-lighten-5"
              v-bind="props"
            >
              <v-img
                src="https://justfields.com/storage/projects/7M5rV059/010.jpg"
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
                <v-btn to="/shop" class="ma-2">Explore</v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="text-center" cols="12" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              color="teal-lighten-5"
              v-bind="props"
            >
              <v-img
                src="https://justfields.com/storage/projects/7M5rV059/03.jpg"
                class="text-white align-end text-left"
                height="200px"
                cover
              >
                <v-card-title>Shirts</v-card-title>
              </v-img>
              <v-card-text class="text-center">
                <div>Upto 60% + Extra 10%</div>
                <div>Nike, Adidas, Puma</div>
              </v-card-text>
              <div class="text-center">
                <v-btn to="/shop" class="ma-2">Explore</v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="text-center" cols="12" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              color="teal-lighten-5"
              v-bind="props"
            >
              <v-img
                src="https://justfields.com/storage/projects/7M5rV059/01.jpg"
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
                <v-btn to="/shop" class="ma-2">Explore</v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="text-center" cols="12" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              color="teal-lighten-5"
              v-bind="props"
            >
              <v-img
                src="https://justfields.com/storage/projects/7M5rV059/05.jpg"
                class="text-white align-end text-left"
                height="200px"
                cover
              >
                <v-card-title>Jackets</v-card-title>
              </v-img>
              <v-card-text class="text-center">
                <div>Upto 60% + Extra 10%</div>
                <div>Nike, Adidas, Puma</div>
              </v-card-text>
              <div class="text-center">
                <v-btn to="/shop" class="ma-2">Explore</v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MightLike",
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>


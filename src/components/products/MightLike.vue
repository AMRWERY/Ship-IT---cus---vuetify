<template>
  <p class="subtitle-1 font-weight-light pt-3 text-center">YOU MIGHT ALSO LIKE</p>
  <v-divider />
  <v-row class="row text-center">
    <v-col class="text-center" md="2" sm="4" xs="12">
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto" height="350"
          max-width="350" v-bind="props">
          <v-img src="public/deal/deal01.jpg" class="text-white align-end text-left" height="200px" cover>
            <v-card-title>Bags & Purses</v-card-title>
          </v-img>
          <v-card-text class="text-center">
            <div>Upto 60% + Extra 10%</div>
            <div>Baggit, Zara, Fossil</div>
          </v-card-text>
          <div class="text-center">
            <v-btn to="/shop" class="ma-2">
              Explore
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="text-center" md="2" sm="4" xs="12">
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto" height="350"
          max-width="350" v-bind="props">
          <v-img src="public/deal/deal02.jpg" class="text-white align-end text-left" height="200px" cover>
            <v-card-title>T-Shirt</v-card-title>
          </v-img>
          <v-card-text class="text-center">
            <div>Upto 50%</div>
            <div>Zara, Selected, Celio</div>
          </v-card-text>
          <div class="text-center">
            <v-btn to="/shop" class="ma-2">
              Explore
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="text-center" md="2" sm="4" xs="12">
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto" height="350"
          max-width="350" v-bind="props">
          <v-img src="../../public/deal/deal01.jpg" class="text-white align-end text-left" height="200px" cover>
            <v-card-title>Jeans</v-card-title>
          </v-img>
          <v-card-text class="text-center">
            <div>Upto 60% + Extra 10%</div>
            <div>Jack & Jones, Levis</div>
          </v-card-text>
          <div class="text-center">
            <v-btn to="/shop" class="ma-2">
              Explore
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="text-center" md="2" sm="4" xs="12">
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto" height="350"
          max-width="350" v-bind="props">
          <v-img src="../../public/deal/deal04.jpg" class="text-white align-end text-left" height="200px" cover>
            <v-card-title>Shirts</v-card-title>
          </v-img>
          <v-card-text class="text-center">
            <div>Upto 60% + Extra 10%</div>
            <div>Nike, Adidas, Puma</div>
          </v-card-text>
          <div class="text-center">
            <v-btn to="/shop" class="ma-2">
              Explore
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="text-center" md="2" sm="4" xs="12">
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto" height="350"
          max-width="350" v-bind="props">
          <v-img src="../../public/deal/deal04.jpg" class="text-white align-end text-left" height="200px" cover>
            <v-card-title>Shoes</v-card-title>
          </v-img>
          <v-card-text class="text-center">
            <div>Upto 60% + Extra 10%</div>
            <div>Nike, Adidas, Puma</div>
          </v-card-text>
          <div class="text-center">
            <v-btn to="/shop" class="ma-2">
              Explore
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="text-center" md="2" sm="4" xs="12">
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto" height="350"
          max-width="350" v-bind="props">
          <v-img src="../../public/shop/03.jpg" class="text-white align-end text-left" height="200px" cover>
            <v-card-title>Jackets</v-card-title>
          </v-img>
          <v-card-text class="text-center">
            <div>Upto 60% + Extra 10%</div>
            <div>Nike, Adidas, Puma</div>
          </v-card-text>
          <div class="text-center">
            <v-btn to="/shop" class="ma-2">
              Explore
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MightLike',
}
</script>

<style lang="sass" scoped>
.v-card.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>


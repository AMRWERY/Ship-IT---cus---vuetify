<template>
  <v-app>
    <Carousel />
    <Banners />
    <Lorem />
    <TodayDeals />
    <Footer />
  </v-app>
</template>

<script>
import Carousel from "@/layouts/Carousel.vue";
import Banners from "../components/Banners.vue";
import Lorem from "../components/Lorem.vue";
import TodayDeals from "@/components/TodayDeals.vue";
import Footer from "../layouts/Footer.vue";

export default {
  name: "Home",

  components: { Carousel, Banners, Lorem, TodayDeals, Footer },
};
</script>



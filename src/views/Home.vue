<template>
  <v-app>
    <Carousel />
    <Banners />
    <Lorem />
    <TodayDeals />
    <Footer />
    <MainFooter />
  </v-app>
</template>

<script>
import Carousel from '@/layouts/Carousel.vue';
import Banners from '../components/Banners.vue';
import Lorem from '../components/Lorem.vue';
import TodayDeals from '@/components/TodayDeals.vue';
import Footer from '../layouts/Footer.vue';
import MainFooter from '../layouts/MainFooter.vue'

export default {
  name: 'Home',

  components: { Carousel, Banners, Lorem, TodayDeals, Footer, MainFooter }
}
</script>



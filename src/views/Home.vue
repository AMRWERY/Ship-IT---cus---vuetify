<template>
    <Carousel />
    <Banners />
    <Lorem />
    <TodayDeals />
</template>

<script>
import Carousel from "@/layouts/Carousel.vue";
import Banners from "../components/Banners.vue";
import Lorem from "../components/Lorem.vue";
import TodayDeals from "@/components/TodayDeals.vue";

export default {
  name: "Home",

  components: { Carousel, Banners, Lorem, TodayDeals },
};
</script>



<template>
  <v-app>
  <Toolbar />
  <router-view />
</v-app>
</template>

<script>
import Toolbar from "./layouts/Toolbar.vue";

export default {
  name: "App",

  components: { Toolbar },
};
</script>

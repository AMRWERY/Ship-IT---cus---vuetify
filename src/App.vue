<template>
  <Toolbar />
  <router-view />
</template>

<script>
import Toolbar from "./layouts/Toolbar.vue";

export default {
  name: "App",

  components: { Toolbar },
};
</script>

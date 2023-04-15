<template>
  <v-footer class="bg-indigo-lighten-2 text-center d-flex flex-column">
    <div>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
    </div>

    <div class="pt-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, voluptate nesciunt odit ullam dolor aspernatur
      ex? Sunt consequatur, dolorem fugit tempore velit deserunt, odit in eos recusandae illo quae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, voluptate nesciunt odit ullam dolor aspernatur
      ex? Sunt consequatur, dolorem fugit tempore velit deserunt, odit in eos recusandae illo quae.
    </div>

    <v-divider></v-divider>

    <div class="mt-6">
      {{ new Date().getFullYear() }} — <strong>ShipIT</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'MainFooter',

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
